import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateClassificationDTO,
	UpdateClassificationDTO,
} from "./classification.schemas";
import { classificationService } from "./classification.service";

const getOneClassification = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Classification']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Classification found",
			schema: { $ref: '#/components/schemas/PublicClassification' }
		}
		#swagger.responses[404] = {
			description: "Classification not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const classification = await classificationService.findOne(query);
	if (!classification) {
		throw new HttpError("Classification not found", 401);
	}
	res.status(200).json(classification);
};

const getClassifications = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Classification']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Classifications found",
			schema: [{ $ref: '#/components/schemas/PublicClassification' }]
		}
	*/
	const query = getQuery(req);
	const classification = await classificationService.find(query);
	res.status(200).json(classification);
};

const createClassification = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Classification']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createClassification' }
		}
		#swagger.responses[201] = {
			description: "Classification created",
			schema: { $ref: '#/components/schemas/PublicClassification' }
		}
	*/
	const classification = req.body as CreateClassificationDTO;
	const savedClassification = await classificationService.create({
		data: classification,
	});
	res.status(201).json(savedClassification);
};

const updateClassification = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Classification']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateClassification' }
		}
		#swagger.responses[200] = {
			description: "Classification updated",
			schema: { $ref: '#/components/schemas/PublicClassification' }
		}
		#swagger.responses[404] = {
			description: "Classification not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateClassificationDTO>;
	const classification = await classificationService.update({
		data: {
			description: data.description,
		},
		where: { id },
	});
	if (!classification) {
		throw new HttpError("Classification not found", 404);
	}
	res.status(200).json(classification);
};

const deleteClassification = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Classification']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Classification deleted",
			schema: { $ref: '#/components/schemas/PublicClassification' }
		}
		#swagger.responses[404] = {
			description: "Classification not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const classification = await classificationService.findOne({ where: { id } });
	if (!classification) throw new HttpError("Classification not found", 404);
	const classificationDeleted = await classificationService.deleteOne({
		where: { id },
	});
	res.status(204).send(classificationDeleted);
};

export const classificationController = {
	getClassifications,
	getOneClassification,
	createClassification,
	updateClassification,
	deleteClassification,
};
