-- DropForeignKey
ALTER TABLE "public"."Documentation" DROP CONSTRAINT "Documentation_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."GasSupply" DROP CONSTRAINT "GasSupply_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Occurrence" DROP CONSTRAINT "Occurrence_vehicleId_fkey";

-- AddForeignKey
ALTER TABLE "Documentation" ADD CONSTRAINT "Documentation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GasSupply" ADD CONSTRAINT "GasSupply_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
