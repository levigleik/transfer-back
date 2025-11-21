import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateIllustrationDTO,
	UpdateIllustrationDTO,
} from "./illustration.schemas";
import { illustrationService } from "./illustration.service";

const getOneIllustration = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Illustration']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Illustration found",
			schema: { $ref: '#/components/schemas/PublicIllustration' }
		}
		#swagger.responses[404] = {
			description: "Illustration not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const illustration = await illustrationService.findOne(query);
	if (!illustration) {
		throw new HttpError("Illustration not found", 401);
	}
	res.status(200).json(illustration);
};

const getIllustrations = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Illustration']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Illustrations found",
			schema: [{ $ref: '#/components/schemas/PublicIllustration' }]
		}
	*/
	const query = getQuery(req);
	const illustration = await illustrationService.find(query);
	res.status(200).json(illustration);
};

const createIllustration = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Illustration']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createIllustration' }
		}
		#swagger.responses[201] = {
			description: "Illustration created",
			schema: { $ref: '#/components/schemas/PublicIllustration' }
		}
	*/
	const illustration = req.body as CreateIllustrationDTO;
	const savedIllustration = await illustrationService.create({
		data: illustration,
	});
	res.status(201).json(savedIllustration);
};

const updateIllustration = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Illustration']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateIllustration' }
		}
		#swagger.responses[200] = {
			description: "Illustration updated",
			schema: { $ref: '#/components/schemas/PublicIllustration' }
		}
		#swagger.responses[404] = {
			description: "Illustration not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateIllustrationDTO>;
	const illustration = await illustrationService.update({
		data: {
			level: data.level,
		},
		where: { id },
	});
	if (!illustration) {
		throw new HttpError("Illustration not found", 404);
	}
	res.status(200).json(illustration);
};

const deleteIllustration = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Illustration']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Illustration deleted",
			schema: { $ref: '#/components/schemas/PublicIllustration' }
		}
		#swagger.responses[404] = {
			description: "Illustration not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const illustration = await illustrationService.findOne({ where: { id } });
	if (!illustration) throw new HttpError("Illustration not found", 404);
	const illustrationDeleted = await illustrationService.deleteOne({
		where: { id },
	});
	res.status(204).send(illustrationDeleted);
};

export const illustrationController = {
	getIllustrations,
	getOneIllustration,
	createIllustration,
	updateIllustration,
	deleteIllustration,
};
