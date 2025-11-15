import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateCompanyDTO, UpdateCompanyDTO } from "./company.schemas";
import { companyService } from "./company.service";

const getOneCompany = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Company']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Company found",
			schema: { $ref: '#/components/schemas/PublicCompany' }
		}
		#swagger.responses[404] = {
			description: "Company not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const company = await companyService.findOne(query);
	if (!company) {
		throw new HttpError("Company not found", 401);
	}
	res.status(200).json(company);
};

const getCompanys = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Company']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Companys found",
			schema: [{ $ref: '#/components/schemas/PublicCompany' }]
		}
	*/
	const query = getQuery(req);
	const company = await companyService.find(query);
	res.status(200).json(company);
};

const createCompany = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Company']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createCompany' }
		}
		#swagger.responses[201] = {
			description: "Company created",
			schema: { $ref: '#/components/schemas/PublicCompany' }
		}
	*/
	const company = req.body as CreateCompanyDTO;
	const savedCompany = await companyService.create({
		data: company,
	});
	res.status(201).json(savedCompany);
};

const updateCompany = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Company']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateCompany' }
		}
		#swagger.responses[200] = {
			description: "Company updated",
			schema: { $ref: '#/components/schemas/PublicCompany' }
		}
		#swagger.responses[404] = {
			description: "Company not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateCompanyDTO>;
	const company = await companyService.update({
		data: {
			name: data.name,
			cnpj: data.cnpj,
		},
		where: { id },
	});
	if (!company) {
		throw new HttpError("Company not found", 404);
	}
	res.status(200).json(company);
};

const deleteCompany = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Company']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Company deleted",
			schema: { $ref: '#/components/schemas/PublicCompany' }
		}
		#swagger.responses[404] = {
			description: "Company not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const company = await companyService.findOne({ where: { id } });
	if (!company) throw new HttpError("Company not found", 404);
	await companyService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const companyController = {
	getCompanys,
	getOneCompany,
	createCompany,
	updateCompany,
	deleteCompany,
};
