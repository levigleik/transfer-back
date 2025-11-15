import gasStationRouter from "@/modules/gas-station/gas-station.routes";
import gasSupplyRouter from "@/modules/gas-supply/gas-supply.routes";
import healthRouter from "@/modules/health/health.routes";
import express from "express";

const router = express.Router();

router.use(healthRouter);
router.use(gasStationRouter);
router.use(gasSupplyRouter);

export { router };
