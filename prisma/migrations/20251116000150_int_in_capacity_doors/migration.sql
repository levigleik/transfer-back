/*
  Warnings:

  - Changed the type of `capacity` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `doors` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "capacity",
ADD COLUMN     "capacity" INTEGER NOT NULL,
DROP COLUMN "doors",
ADD COLUMN     "doors" INTEGER NOT NULL;
