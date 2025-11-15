import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateUserDTO, UpdateUserDTO } from "./user.schemas";
import { userService } from "./user.service";

const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['User']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "User found",
			schema: { $ref: '#/components/schemas/PublicUser' }
		}
		#swagger.responses[404] = {
			description: "User not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const user = await userService.findOne(query);
	if (!user) {
		throw new HttpError("User not found", 401);
	}
	res.status(200).json(user);
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['User']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Users found",
			schema: [{ $ref: '#/components/schemas/PublicUser' }]
		}
	*/
	const query = getQuery(req);
	const user = await userService.find(query);
	res.status(200).json(user);
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['User']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createUser' }
		}
		#swagger.responses[201] = {
			description: "User created",
			schema: { $ref: '#/components/schemas/PublicUser' }
		}
	*/
	const user = req.body as CreateUserDTO;
	const savedUser = await userService.create(user);
	res.status(201).json(savedUser);
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['User']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateUser' }
		}
		#swagger.responses[200] = {
			description: "User updated",
			schema: { $ref: '#/components/schemas/PublicUser' }
		}
		#swagger.responses[404] = {
			description: "User not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateUserDTO>;
	const user = await userService.update({
		data: {
			name: data.name,
		},
		where: { id },
	});
	if (!user) {
		throw new HttpError("User not found", 404);
	}
	res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['User']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "User deleted",
			schema: { $ref: '#/components/schemas/PublicUser' }
		}
		#swagger.responses[404] = {
			description: "User not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const user = await userService.findOne({ where: { id } });
	if (!user) throw new HttpError("User not found", 404);
	await userService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const userController = {
	getUsers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
};
