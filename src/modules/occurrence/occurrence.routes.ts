import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { occurrenceController } from "./occurrence.controller";
import {
	createOccurrenceSchema,
	updateOccurrenceSchema,
} from "./occurrence.schemas";

const occurrenceRouter = express.Router();

occurrenceRouter
	.route("/occurrence")
	.get(occurrenceController.getOccurrences)
	.post(
		validateBody(createOccurrenceSchema),
		occurrenceController.createOccurrence,
	);

occurrenceRouter
	.route("/occurrence/:id")
	.get(occurrenceController.getOneOccurrence)
	.put(validateBody(updateOccurrenceSchema), occurrenceController.updateOccurrence)
	.delete(occurrenceController.deleteOccurrence);

export default occurrenceRouter;
