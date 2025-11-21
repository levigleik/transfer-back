import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateVehicleDTO, UpdateVehicleDTO } from "./vehicle.schemas";
import { vehicleService } from "./vehicle.service";

const getOneVehicle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Vehicle']
		#swagger.responses[200] = {
			description: "Vehicle found",
			schema: { $ref: '#/components/schemas/PublicVehicle' }
		}
		#swagger.responses[404] = {
			description: "Vehicle not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const vehicle = await vehicleService.findOne(query);
	if (!vehicle) {
		throw new HttpError("Vehicle not found", 401);
	}
	res.status(200).json(vehicle);
};

const getVehicles = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Vehicle']
		#swagger.responses[200] = {
			description: "Vehicles found",
			schema: [{ $ref: '#/components/schemas/PublicVehicle' }]
		}
	*/
	const query = getQuery(req);
	const vehicle = await vehicleService.find(query);
	res.status(200).json(vehicle);
};

const createVehicle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Vehicle']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createVehicle' }
		}
		#swagger.responses[201] = {
			description: "Vehicle created",
			schema: { $ref: '#/components/schemas/PublicVehicle' }
		}
	*/
	const vehicle = req.body as CreateVehicleDTO;
	const savedVehicle = await vehicleService.create({
		data: {
			identifier: vehicle.identifier,
			model: vehicle.model,
			year: vehicle.year,
			capacity: vehicle.capacity,
			doors: vehicle.doors,
			uf: vehicle.uf,
			plateType: vehicle.plateType,
			plate: vehicle.plate,
			renavam: vehicle.renavam,
			chassi: vehicle.chassi,
			review: vehicle.review,
			description: vehicle.description,
			// photos: vehicle.photos,
			gas: {
				connect: { id: vehicle.gasId },
			},
			company: {
				connect: { id: vehicle.companyId },
			},
			brand: {
				connect: { id: vehicle.brandId },
			},
			category: {
				connect: { id: vehicle.categoryId },
			},
			classification: {
				connect: { id: vehicle.classificationId },
			},
			status: {
				connect: { id: vehicle.statusId },
			},
		},
	});
	res.status(201).json(savedVehicle);
};

const updateVehicle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Vehicle']
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateVehicle' }
		}
		#swagger.responses[200] = {
			description: "Vehicle updated",
			schema: { $ref: '#/components/schemas/PublicVehicle' }
		}
		#swagger.responses[404] = {
			description: "Vehicle not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateVehicleDTO>;
	const vehicle = await vehicleService.update({
		data: {
			identifier: data.identifier,
			model: data.model,
			year: data.year,
			capacity: data.capacity,
			doors: data.doors,
			uf: data.uf,
			plateType: data.plateType,
			plate: data.plate,
			renavam: data.renavam,
			chassi: data.chassi,
			review: data.review,
			description: data.description,
			photos: data.photos,
		},
		where: { id },
	});
	if (!vehicle) {
		throw new HttpError("Vehicle not found", 404);
	}
	res.status(200).json(vehicle);
};

const deleteVehicle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Vehicle']
		#swagger.responses[200] = {
			description: "Vehicle deleted",
			schema: { $ref: '#/components/schemas/PublicVehicle' }
		}
		#swagger.responses[404] = {
			description: "Vehicle not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const vehicle = await vehicleService.findOne({ where: { id } });
	if (!vehicle) throw new HttpError("Vehicle not found", 404);
	const vehicleDeleted = await vehicleService.deleteOne({ where: { id } });
	res.status(204).send(vehicleDeleted);
};

const uploadVehiclePhotos = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
    #swagger.tags = ['Vehicle']
    #swagger.consumes = ['multipart/form-data']
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              photos: {
                type: "array",
                items: {
                  type: "string",
                  format: "binary"
                }
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

		// paths públicos que serão salvos em Vehicle.photos
		const photoPaths = files.map(
			(file) => `/uploads/vehicles/${file.filename}`,
		);

		const tempVehicle = await vehicleService.findOne({
			where: { id },
		});

		const vehiclePhotos = tempVehicle?.photos;

		const vehicle = await vehicleService.update({
			where: { id },
			data: {
				photos: vehiclePhotos ? [...vehiclePhotos, ...photoPaths] : photoPaths,
			},
		});

		if (!vehicle) {
			throw new HttpError("Vehicle not found", 404);
		}

		res.status(200).json(vehicle);
	} catch (err) {
		next(err);
	}
};

export const vehicleController = {
	getVehicles,
	getOneVehicle,
	createVehicle,
	updateVehicle,
	deleteVehicle,
	uploadVehiclePhotos,
};
