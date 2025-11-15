import brandRouter from "@/modules/brand/brand.routes";
import categoryRouter from "@/modules/category/category.routes";
import classificationRouter from "@/modules/classification/classification.routes";
import documentationRouter from "@/modules/documentation/documentation.routes";
import gasStationRouter from "@/modules/gas-station/gas-station.routes";
import gasSupplyRouter from "@/modules/gas-supply/gas-supply.routes";
import gasRouter from "@/modules/gas/gas.routes";
import healthRouter from "@/modules/health/health.routes";
import occurrenceRouter from "@/modules/occurrence/occurrence.routes";
import seriousnessRouter from "@/modules/seriousness/seriousness.routes";
import vehicleRouter from "@/modules/vehicle/vehicle.routes";
import express from "express";

const router = express.Router();

router.use(healthRouter);

router.use(brandRouter);
router.use(categoryRouter);
router.use(classificationRouter);
router.use(documentationRouter);
router.use(gasRouter);
router.use(gasStationRouter);
router.use(gasSupplyRouter);
router.use(occurrenceRouter);
router.use(seriousnessRouter);
router.use(vehicleRouter);

export { router };
