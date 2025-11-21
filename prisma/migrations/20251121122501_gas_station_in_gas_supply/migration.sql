/*
  Warnings:

  - Added the required column `gasStationId` to the `GasSupply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GasSupply" ADD COLUMN     "gasStationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GasSupply" ADD CONSTRAINT "GasSupply_gasStationId_fkey" FOREIGN KEY ("gasStationId") REFERENCES "GasStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
