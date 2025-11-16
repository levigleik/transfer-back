/*
  Warnings:

  - You are about to drop the column `chassis` on the `Vehicle` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chassi]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chassi` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Vehicle_chassis_key";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "chassis",
ADD COLUMN     "chassi" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_chassi_key" ON "Vehicle"("chassi");
