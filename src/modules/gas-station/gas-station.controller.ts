import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateGasStationDTO,
	UpdateGasStationDTO,
} from "./gas-station.schemas";
import { gasStationService } from "./gas-station.service";

const getOneGasStation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasStation']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasStation found",
			schema: { $ref: '#/components/schemas/PublicGasStation' }
		}
		#swagger.responses[404] = {
			description: "GasStation not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const gasStation = await gasStationService.findOne(query);
	if (!gasStation) {
		throw new HttpError("GasStation not found", 401);
	}
	res.status(200).json(gasStation);
};

const getGasStations = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasStation']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasStations found",
			schema: [{ $ref: '#/components/schemas/PublicGasStation' }]
		}
	*/
	const query = getQuery(req);
	const gasStation = await gasStationService.find(query);
	res.status(200).json(gasStation);
};

const createGasStation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasStation']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createGasStation' }
		}
		#swagger.responses[201] = {
			description: "GasStation created",
			schema: { $ref: '#/components/schemas/PublicGasStation' }
		}
	*/
	const gasStation = req.body as CreateGasStationDTO;
	const savedGasStation = await gasStationService.create({ data: gasStation });
	res.status(201).json(savedGasStation);
};

const updateGasStation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasStation']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateGasStation' }
		}
		#swagger.responses[200] = {
			description: "GasStation updated",
			schema: { $ref: '#/components/schemas/PublicGasStation' }
		}
		#swagger.responses[404] = {
			description: "GasStation not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateGasStationDTO>;
	const gasStation = await gasStationService.update({
		data: {
			name: data.name,
		},
		where: { id },
	});
	if (!gasStation) {
		throw new HttpError("GasStation not found", 404);
	}
	res.status(200).json(gasStation);
};

const deleteGasStation = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasStation']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasStation deleted",
			schema: { $ref: '#/components/schemas/PublicGasStation' }
		}
		#swagger.responses[404] = {
			description: "GasStation not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const gasStation = await gasStationService.findOne({ where: { id } });
	if (!gasStation) throw new HttpError("GasStation not found", 404);
	const gasStationDeleted = await gasStationService.deleteOne({
		where: { id },
	});
	res.status(204).send(gasStationDeleted);
};

export const gasStationController = {
	getGasStations,
	getOneGasStation,
	createGasStation,
	updateGasStation,
	deleteGasStation,
};
