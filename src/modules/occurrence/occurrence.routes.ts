import { uploadFiles } from "@/lib/upload-files";
import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { occurrenceController } from "./occurrence.controller";
import {
	createOccurrenceSchema,
	updateOccurrenceSchema,
} from "./occurrence.schemas";

const occurrenceRouter = express.Router();

const occurrenceAttachmentsUploader = uploadFiles((req) => {
	return `occurrence/${req.params.id}/attachments`;
});

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
	.put(
		validateBody(updateOccurrenceSchema),
		occurrenceController.updateOccurrence,
	)
	.delete(occurrenceController.deleteOccurrence);

occurrenceRouter.post(
	"/occurrence/:id/attachments",
	occurrenceAttachmentsUploader.array("files", 1),
	occurrenceController.uploadOccurrenceFile,
);

export default occurrenceRouter;
