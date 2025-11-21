/*
  Warnings:

  - Added the required column `vehicleId` to the `Documentation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `GasSupply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `Occurrence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentation" ADD COLUMN     "vehicleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GasSupply" ADD COLUMN     "vehicleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Occurrence" ADD COLUMN     "vehicleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Documentation" ADD CONSTRAINT "Documentation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GasSupply" ADD CONSTRAINT "GasSupply_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
