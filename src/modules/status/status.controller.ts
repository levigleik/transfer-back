import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateStatusDTO, UpdateStatusDTO } from "./status.schemas";
import { statusService } from "./status.service";

const getOneStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Status']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Status found",
			schema: { $ref: '#/components/schemas/PublicStatus' }
		}
		#swagger.responses[404] = {
			description: "Status not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const status = await statusService.findOne(query);
	if (!status) {
		throw new HttpError("Status not found", 401);
	}
	res.status(200).json(status);
};

const getStatuss = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Status']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Statuss found",
			schema: [{ $ref: '#/components/schemas/PublicStatus' }]
		}
	*/
	const query = getQuery(req);
	const status = await statusService.find(query);
	res.status(200).json(status);
};

const createStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Status']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createStatus' }
		}
		#swagger.responses[201] = {
			description: "Status created",
			schema: { $ref: '#/components/schemas/PublicStatus' }
		}
	*/
	const status = req.body as CreateStatusDTO;
	const savedStatus = await statusService.create({
		data: status,
	});
	res.status(201).json(savedStatus);
};

const updateStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Status']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateStatus' }
		}
		#swagger.responses[200] = {
			description: "Status updated",
			schema: { $ref: '#/components/schemas/PublicStatus' }
		}
		#swagger.responses[404] = {
			description: "Status not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateStatusDTO>;
	const status = await statusService.update({
		data: {
			name: data.name,
		},
		where: { id },
	});
	if (!status) {
		throw new HttpError("Status not found", 404);
	}
	res.status(200).json(status);
};

const deleteStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Status']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Status deleted",
			schema: { $ref: '#/components/schemas/PublicStatus' }
		}
		#swagger.responses[404] = {
			description: "Status not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const status = await statusService.findOne({ where: { id } });
	if (!status) throw new HttpError("Status not found", 404);
	await statusService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const statusController = {
	getStatuss,
	getOneStatus,
	createStatus,
	updateStatus,
	deleteStatus,
};
