import gasStationRouter from "@/modules/gas-station/gas-station.routes";
import healthRouter from "@/modules/health/health.routes";
import express from "express";

const router = express.Router();

router.use(healthRouter);
router.use(gasStationRouter);

export { router };
