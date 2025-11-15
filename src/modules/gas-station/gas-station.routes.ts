import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { gasStationController } from "./gas-station.controller";
import {
	createGasStationSchema,
	updateGasStationSchema,
} from "./gas-station.schemas";

const gasStationRouter = express.Router();

gasStationRouter
	.route("/gasStation")
	.get(gasStationController.getGasStations)
	.post(
		validateBody(createGasStationSchema),
		gasStationController.createGasStation,
	);

gasStationRouter
	.route("/gasStation/:id")
	.get(gasStationController.getOneGasStation)
	.put(
		validateBody(updateGasStationSchema),
		gasStationController.updateGasStation,
	)
	.delete(gasStationController.deleteGasStation);

export default gasStationRouter;
