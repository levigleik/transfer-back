/*
  Warnings:

  - You are about to drop the column `antecipateRenewal` on the `Documentation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Documentation" DROP COLUMN "antecipateRenewal",
ADD COLUMN     "anticipateRenewal" BOOLEAN NOT NULL DEFAULT false;
