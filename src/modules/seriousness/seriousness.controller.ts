import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateSeriousnessDTO,
	UpdateSeriousnessDTO,
} from "./seriousness.schemas";
import { seriousnessService } from "./seriousness.service";

const getOneSeriousness = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Seriousness']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Seriousness found",
			schema: { $ref: '#/components/schemas/PublicSeriousness' }
		}
		#swagger.responses[404] = {
			description: "Seriousness not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const seriousness = await seriousnessService.findOne(query);
	if (!seriousness) {
		throw new HttpError("Seriousness not found", 401);
	}
	res.status(200).json(seriousness);
};

const getSeriousnesss = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Seriousness']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Seriousnesss found",
			schema: [{ $ref: '#/components/schemas/PublicSeriousness' }]
		}
	*/
	const query = getQuery(req);
	const seriousness = await seriousnessService.find(query);
	res.status(200).json(seriousness);
};

const createSeriousness = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Seriousness']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createSeriousness' }
		}
		#swagger.responses[201] = {
			description: "Seriousness created",
			schema: { $ref: '#/components/schemas/PublicSeriousness' }
		}
	*/
	const seriousness = req.body as CreateSeriousnessDTO;
	const savedSeriousness = await seriousnessService.create({
		data: seriousness,
	});
	res.status(201).json(savedSeriousness);
};

const updateSeriousness = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Seriousness']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateSeriousness' }
		}
		#swagger.responses[200] = {
			description: "Seriousness updated",
			schema: { $ref: '#/components/schemas/PublicSeriousness' }
		}
		#swagger.responses[404] = {
			description: "Seriousness not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateSeriousnessDTO>;
	const seriousness = await seriousnessService.update({
		data: {
			level: data.level,
		},
		where: { id },
	});
	if (!seriousness) {
		throw new HttpError("Seriousness not found", 404);
	}
	res.status(200).json(seriousness);
};

const deleteSeriousness = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Seriousness']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Seriousness deleted",
			schema: { $ref: '#/components/schemas/PublicSeriousness' }
		}
		#swagger.responses[404] = {
			description: "Seriousness not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const seriousness = await seriousnessService.findOne({ where: { id } });
	if (!seriousness) throw new HttpError("Seriousness not found", 404);
	const seriousnessDeleted = await seriousnessService.deleteOne({
		where: { id },
	});
	res.status(204).send(seriousnessDeleted);
};

export const seriousnessController = {
	getSeriousnesss,
	getOneSeriousness,
	createSeriousness,
	updateSeriousness,
	deleteSeriousness,
};
