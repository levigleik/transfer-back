import authRouter from "@/modules/auth/auth.routes";
import healthRouter from "@/modules/health/health.routes";
import userRouter from "@/modules/user/user.routes";
import express from "express";

const router = express.Router();

router.use(healthRouter);
router.use(userRouter);
router.use(authRouter);

export { router };
