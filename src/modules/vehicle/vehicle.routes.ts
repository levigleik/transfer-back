import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { vehicleController } from "./vehicle.controller";
import {
	createVehicleSchema,
	updateVehicleSchema,
} from "./vehicle.schemas";

const vehicleRouter = express.Router();

vehicleRouter
	.route("/vehicle")
	.get(vehicleController.getVehicles)
	.post(
		validateBody(createVehicleSchema),
		vehicleController.createVehicle,
	);

vehicleRouter
	.route("/vehicle/:id")
	.get(vehicleController.getOneVehicle)
	.put(
		validateBody(updateVehicleSchema),
		vehicleController.updateVehicle,
	)
	.delete(vehicleController.deleteVehicle);

export default vehicleRouter;
