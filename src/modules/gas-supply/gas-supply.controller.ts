import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { File, GasSupply } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { fileService } from "../file/file.service";
import type {
	CreateGasSupplyDTO,
	UpdateGasSupplyDTO,
} from "./gas-supply.schemas";
import { gasSupplyService } from "./gas-supply.service";

const getOneGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.responses[200] = {
			description: "GasSupply found",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const gasSupply = await gasSupplyService.findOne(query);
	if (!gasSupply) {
		throw new HttpError("GasSupply not found", 401);
	}
	res.status(200).json(gasSupply);
};

const getGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.responses[200] = {
			description: "GasSupply found",
			schema: [{ $ref: '#/components/schemas/PublicGasSupply' }]
		}
	*/
	const query = getQuery(req);
	const gasSupply = await gasSupplyService.find(query);
	res.status(200).json(gasSupply);
};

const createGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createGasSupply' }
		}
		#swagger.responses[201] = {
			description: "GasSupply created",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
	*/
	const gasSupply = req.body as CreateGasSupplyDTO;
	const savedGasSupply = await gasSupplyService.create({
		data: {
			kmToReview: gasSupply.kmToReview,
			kmToStop: gasSupply.kmToStop,
			quantity: gasSupply.quantity,
			supplyAt: gasSupply.supplyAt,
			totalPrice: gasSupply.totalPrice,
			gas: {
				connect: { id: gasSupply.gasId },
			},
			gasStation: {
				connect: { id: gasSupply.gasStationId },
			},
			vehicle: {
				connect: {
					id: gasSupply.vehicleId,
				},
			},
		},
	});
	res.status(201).json(savedGasSupply);
};

const updateGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateGasSupply' }
		}
		#swagger.responses[200] = {
			description: "GasSupply updated",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateGasSupplyDTO>;
	const gasSupply = await gasSupplyService.update({
		data: {
			kmToReview: data.kmToReview,
			kmToStop: data.kmToStop,
			supplyAt: data.supplyAt,
			quantity: data.quantity,
			totalPrice: data.totalPrice,
			gasStation: data.gasStationId
				? { connect: { id: data.gasStationId } }
				: undefined,
			gas: data.gasId ? { connect: { id: data.gasId } } : undefined,
		},
		where: { id },
	});
	if (!gasSupply) {
		throw new HttpError("GasSupply not found", 404);
	}
	res.status(200).json(gasSupply);
};

const deleteGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.responses[200] = {
			description: "GasSupply deleted",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const gasSupply = (await gasSupplyService.findOne({
		where: { id },
		include: { file: true },
	})) as GasSupply & { file: File };

	if (!gasSupply) throw new HttpError("GasSupply not found", 404);
	const gasSupplyDeleted = await gasSupplyService.deleteOne({
		where: { id },
	});

	if (gasSupply.fileId) {
		fileService.deleteFile(gasSupply.file);
		await fileService.deleteOne({ where: { id: gasSupply.fileId } });
	}
	res.status(204).send(gasSupplyDeleted);
};

const uploadGasSupplyFile = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
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

		const tempGasSupply = (await gasSupplyService.findOne({
			where: { id },
			include: { file: true },
		})) as GasSupply & { file: File };

		if (!tempGasSupply) {
			throw new HttpError("GasSupply not found", 404);
		}

		if (tempGasSupply.fileId !== null && tempGasSupply.file) {
			try {
				fileService.deleteFile(tempGasSupply.file);

				await fileService.deleteOne({
					where: { id: tempGasSupply.file.id },
				});
			} catch (err) {
				console.error("Erro ao remover arquivo antigo:", err);
			}
		}

		const fileCreated = await fileService.createFileRecordFromMulter(
			"gasSupply",
			files[0],
		);

		const gasSupply = await gasSupplyService.update({
			where: { id },
			data: {
				file: {
					connect: {
						id: fileCreated.id,
					},
				},
			},
		});

		if (!gasSupply) {
			throw new HttpError("GasSupply not found after update", 404);
		}

		res.status(200).json(gasSupply);
	} catch (err) {
		next(err);
	}
};

export const gasSupplyController = {
	getGasSupply,
	getOneGasSupply,
	createGasSupply,
	updateGasSupply,
	deleteGasSupply,
	uploadGasSupplyFile,
};
