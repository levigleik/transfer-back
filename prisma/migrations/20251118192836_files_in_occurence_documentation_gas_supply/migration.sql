/*
  Warnings:

  - Added the required column `document` to the `Documentation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receipt` to the `GasSupply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachment` to the `Occurrence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentation" ADD COLUMN     "document" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GasSupply" ADD COLUMN     "receipt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Occurrence" ADD COLUMN     "attachment" TEXT NOT NULL;
