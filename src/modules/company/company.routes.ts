import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { companyController } from "./company.controller";
import {
	createCompanySchema,
	updateCompanySchema,
} from "./company.schemas";

const companyRouter = express.Router();

companyRouter
	.route("/company")
	.get(companyController.getCompanys)
	.post(
		validateBody(createCompanySchema),
		companyController.createCompany,
	);

companyRouter
	.route("/company/:id")
	.get(companyController.getOneCompany)
	.put(
		validateBody(updateCompanySchema),
		companyController.updateCompany,
	)
	.delete(companyController.deleteCompany);

export default companyRouter;
