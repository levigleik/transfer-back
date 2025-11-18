import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { vehicleController } from "./vehicle.controller";
import { createVehicleSchema, updateVehicleSchema } from "./vehicle.schemas";
import { uploadVehiclePhotos } from "@/lib/upload-vehicle-images";

const vehicleRouter = express.Router();

vehicleRouter
	.route("/vehicle")
	.get(vehicleController.getVehicles)
	.post(validateBody(createVehicleSchema), vehicleController.createVehicle);

vehicleRouter
	.route("/vehicle/:id")
	.get(vehicleController.getOneVehicle)
	.put(validateBody(updateVehicleSchema), vehicleController.updateVehicle)
	.delete(vehicleController.deleteVehicle);

vehicleRouter.post(
	"/vehicle/:id/photos",
	uploadVehiclePhotos.array("photos", 10),
	vehicleController.uploadVehiclePhotos,
);

export default vehicleRouter;
