import * as fs from "node:fs";
import path from "node:path";
import { HttpError } from "@/lib/error/http-error";
import { prisma } from "@/lib/prisma";
import { getQuery } from "@/lib/query";
import type { Documentation, File } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateDocumentationDTO,
	UpdateDocumentationDTO,
} from "./documentation.schemas";
import { documentationService } from "./documentation.service";

const getOneDocumentation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.responses[200] = {
			description: "Documentation found",
			schema: { $ref: '#/components/schemas/PublicDocumentation' }
		}
		#swagger.responses[404] = {
			description: "Documentation not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const documentation = await documentationService.findOne(query);
	if (!documentation) {
		throw new HttpError("Documentation not found", 401);
	}
	res.status(200).json(documentation);
};

const getDocumentations = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.responses[200] = {
			description: "Documentations found",
			schema: [{ $ref: '#/components/schemas/PublicDocumentation' }]
		}
	*/
	const query = getQuery(req);
	const documentation = await documentationService.find(query);
	res.status(200).json(documentation);
};

const createDocumentation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createDocumentation' }
		}
		#swagger.responses[201] = {
			description: "Documentation created",
			schema: { $ref: '#/components/schemas/PublicDocumentation' }
		}
	*/
	const documentation = req.body as CreateDocumentationDTO;
	const savedDocumentation = await documentationService.create({
		data: {
			days: documentation.days,
			expiryAt: documentation.expiryAt,
			type: documentation.type,
			anticipateRenewal: documentation.anticipateRenewal,
			vehicle: { connect: { id: documentation.vehicleId } },
		},
	});
	res.status(201).json(savedDocumentation);
};

const updateDocumentation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateDocumentation' }
		}
		#swagger.responses[200] = {
			description: "Documentation updated",
			schema: { $ref: '#/components/schemas/PublicDocumentation' }
		}
		#swagger.responses[404] = {
			description: "Documentation not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateDocumentationDTO>;
	const documentation = await documentationService.update({
		data: {
			type: data.type,
			expiryAt: data.expiryAt,
			days: data.days,
			anticipateRenewal: data.anticipateRenewal,
		},
		where: { id },
	});
	if (!documentation) {
		throw new HttpError("Documentation not found", 404);
	}
	res.status(200).json(documentation);
};

const deleteDocumentation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.responses[200] = {
			description: "Documentation deleted",
			schema: { $ref: '#/components/schemas/PublicDocumentation' }
		}
		#swagger.responses[404] = {
			description: "Documentation not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const documentation = await documentationService.findOne({ where: { id } });
	if (!documentation) throw new HttpError("Documentation not found", 404);
	const documentationDeleted = await documentationService.deleteOne({
		where: { id },
	});
	res.status(204).send(documentationDeleted);
};

const uploadDocumentationFile = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Documentation']
		#swagger.security = [{ "bearerAuth": [] }]
		#swagger.consumes = ['multipart/form-data']
		#swagger.requestBody = {
			required: true,
			content: {
				"multipart/form-data": {
					schema: {
						type: "object",
						properties: {
							doc: {
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

		if (!files) throw new HttpError("No file uploaded", 400);

		const tempDocumentation = (await documentationService.findOne({
			where: { id },
			include: { file: true },
		})) as Documentation & { file: File };

		if (!tempDocumentation) {
			throw new HttpError("Documentation not found", 404);
		}

		if (tempDocumentation.fileId !== null && tempDocumentation.file) {
			try {
				const existingFile = tempDocumentation.file;
				const fsPath = path.join(process.cwd(), existingFile.path);
				fs.unlink(fsPath, () => {});

				await prisma.file.delete({ where: { id: existingFile.id } });
			} catch (err) {
				console.error("Erro ao remover arquivo antigo:", err);
			}
		}
		const fileCreated = await documentationService.createFileRecordFromMulter(
			files[0],
		);

		await documentationService.update({
			where: { id },
			data: {
				file: {
					connect: {
						id: fileCreated.id,
					},
				},
			},
		});

		const documentation = await documentationService.findOne({
			where: { id },
			include: { file: true },
		});

		if (!documentation) {
			throw new HttpError("Documentation not found after update", 404);
		}

		res.status(200).json(documentation);
	} catch (err) {
		console.error("------------", err);
		next(err);
	}
};

export const documentationController = {
	getDocumentations,
	getOneDocumentation,
	createDocumentation,
	updateDocumentation,
	deleteDocumentation,
	uploadDocumentationFile,
};
