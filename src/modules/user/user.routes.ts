import { authenticate } from "@/middleware/auth.middleware";
import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { userController } from "./user.controller";
import { createUserSchema, updateUserSchema } from "./user.schemas";

const userRouter = express.Router();

userRouter
	.route("/user")
	.get(userController.getUsers)
	.post(validateBody(createUserSchema), userController.createUser);

userRouter
	.route("/user/:id")
	.get(userController.getOneUser)
	.put(validateBody(updateUserSchema), userController.updateUser)
	.delete(userController.deleteUser);

export default userRouter;
