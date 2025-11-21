/*
  Warnings:

  - You are about to drop the column `date` on the `Occurrence` table. All the data in the column will be lost.
  - Added the required column `occurrenceDate` to the `Occurrence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registerDate` to the `Occurrence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "date",
ADD COLUMN     "occurrenceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "registerDate" TIMESTAMP(3) NOT NULL;
