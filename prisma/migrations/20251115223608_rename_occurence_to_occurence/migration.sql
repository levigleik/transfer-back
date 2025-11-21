/*
  Warnings:

  - You are about to drop the `Occurence` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Occurence" DROP CONSTRAINT "Occurence_classificationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Occurence" DROP CONSTRAINT "Occurence_seriousnessId_fkey";

-- DropTable
DROP TABLE "public"."Occurence";

-- CreateTable
CREATE TABLE "Occurrence" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "seriousnessId" INTEGER NOT NULL,
    "classificationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Occurrence_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_seriousnessId_fkey" FOREIGN KEY ("seriousnessId") REFERENCES "Seriousness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Occurrence" ADD CONSTRAINT "Occurrence_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "Classification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
