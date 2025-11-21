import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { File, Occurrence } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { fileService } from "../file/file.service";
import type {
	CreateOccurrenceDTO,
	UpdateOccurrenceDTO,
} from "./occurrence.schemas";
import { occurrenceService } from "./occurrence.service";

const getOneOccurrence = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.responses[200] = {
			description: "Occurrence found",
			schema: { $ref: '#/components/schemas/PublicOccurrence' }
		}
		#swagger.responses[404] = {
			description: "Occurrence not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const occurrence = await occurrenceService.findOne(query);
	if (!occurrence) {
		throw new HttpError("Occurrence not found", 401);
	}
	res.status(200).json(occurrence);
};

const getOccurrences = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.responses[200] = {
			description: "Occurrences found",
			schema: [{ $ref: '#/components/schemas/PublicOccurrence' }]
		}
	*/
	const query = getQuery(req);
	const occurrence = await occurrenceService.find(query);
	res.status(200).json(occurrence);
};

const createOccurrence = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createOccurrence' }
		}
		#swagger.responses[201] = {
			description: "Occurrence created",
			schema: { $ref: '#/components/schemas/PublicOccurrence' }
		}
	*/
	const occurrence = req.body as CreateOccurrenceDTO;
	const savedOccurrence = await occurrenceService.create({
		data: {
			registerDate: occurrence.registerDate,
			occurrenceDate: occurrence.occurrenceDate,
			description: occurrence.description,
			seriousness: { connect: { id: occurrence.seriousnessId } },
			classification: { connect: { id: occurrence.classificationId } },
			vehicle: { connect: { id: occurrence.vehicleId } },
		},
	});
	res.status(201).json(savedOccurrence);
};

const updateOccurrence = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateOccurrence' }
		}
		#swagger.responses[200] = {
			description: "Occurrence updated",
			schema: { $ref: '#/components/schemas/PublicOccurrence' }
		}
		#swagger.responses[404] = {
			description: "Occurrence not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateOccurrenceDTO>;
	const occurrence = await occurrenceService.update({
		data: {
			occurrenceDate: data.occurrenceDate,
			registerDate: data.registerDate,
			description: data.description,
			seriousness: data.seriousnessId
				? { connect: { id: data.seriousnessId } }
				: undefined,
			classification: data.classificationId
				? { connect: { id: data.classificationId } }
				: undefined,
		},
		where: { id },
	});
	if (!occurrence) {
		throw new HttpError("Occurrence not found", 404);
	}
	res.status(200).json(occurrence);
};

const deleteOccurrence = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.responses[200] = {
			description: "Occurrence deleted",
			schema: { $ref: '#/components/schemas/PublicOccurrence' }
		}
		#swagger.responses[404] = {
			description: "Occurrence not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const occurrence = (await occurrenceService.findOne({
		where: { id },
		include: { file: true },
	})) as Occurrence & { file: File };

	if (!occurrence) throw new HttpError("Occurrence not found", 404);
	const occurrenceDeleted = await occurrenceService.deleteOne({
		where: { id },
	});

	if (occurrence.fileId) {
		fileService.deleteFile(occurrence.file);
		await fileService.deleteOne({ where: { id: occurrence.fileId } });
	}
	res.status(204).send(occurrenceDeleted);
};

const uploadOccurrenceFile = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Occurrence']
		#swagger.consumes = ['multipart/form-data']
		#swagger.requestBody = {
			required: true,
			content: {
				"multipart/form-data": {
					schema: {
						type: "object",
						properties: {
							files: {
								type: "string",
								format: "binary"
							}
						}
					}
				}
			}
		}
	*/

	try {
		const id = Number(req.params.id);
		if (!id) throw new HttpError("Invalid id", 400);

		const files = (req.files ?? []) as Express.Multer.File[];

		if (!files.length) throw new HttpError("No file uploaded", 400);

		const tempOccurrence = (await occurrenceService.findOne({
			where: { id },
			include: { file: true },
		})) as Occurrence & { file: File };

		if (!tempOccurrence) {
			throw new HttpError("Occurrence not found", 404);
		}

		if (tempOccurrence.fileId !== null && tempOccurrence.file) {
			try {
				fileService.deleteFile(tempOccurrence.file);

				await fileService.deleteOne({
					where: { id: tempOccurrence.file.id },
				});
			} catch (err) {
				console.error("Erro ao remover arquivo antigo:", err);
			}
		}

		const fileCreated = await fileService.createFileRecordFromMulter(
			"ocurrence",
			files[0],
		);

		const occurrence = await occurrenceService.update({
			where: { id },
			data: {
				file: {
					connect: {
						id: fileCreated.id,
					},
				},
			},
		});

		if (!occurrence) {
			throw new HttpError("Occurrence not found after update", 404);
		}

		res.status(200).json(occurrence);
	} catch (err) {
		next(err);
	}
};

export const occurrenceController = {
	getOccurrences,
	getOneOccurrence,
	createOccurrence,
	updateOccurrence,
	deleteOccurrence,
	uploadOccurrenceFile,
};
