import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
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
		#swagger.security = [{
      "bearerAuth": []
    }]
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
		#swagger.security = [{
      "bearerAuth": []
    }]
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
		#swagger.security = [{
      "bearerAuth": []
    }]
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
			date: occurrence.date,
			description: occurrence.description,
			seriousness: { connect: { id: occurrence.seriousnessId } },
			classification: { connect: { id: occurrence.classificationId } },
			vehicle: { connect: { id: occurrence.vehicleId } },
			attachment: occurrence.attachment,
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
		#swagger.security = [{
      "bearerAuth": []
    }]
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
			date: data.date,
			description: data.description,
			seriousness: data.seriousnessId
				? { connect: { id: data.seriousnessId } }
				: undefined,
			classification: data.classificationId
				? { connect: { id: data.classificationId } }
				: undefined,
			attachment: data.attachment,
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
		#swagger.security = [{
      "bearerAuth": []
    }]
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
	const occurrence = await occurrenceService.findOne({ where: { id } });
	if (!occurrence) throw new HttpError("Occurrence not found", 404);
	await occurrenceService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const occurrenceController = {
	getOccurrences,
	getOneOccurrence,
	createOccurrence,
	updateOccurrence,
	deleteOccurrence,
};
