/*
  Warnings:

  - You are about to drop the column `document` on the `Documentation` table. All the data in the column will be lost.
  - You are about to drop the column `documentationId` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."File" DROP CONSTRAINT "File_documentationId_fkey";

-- AlterTable
ALTER TABLE "Documentation" DROP COLUMN "document",
ADD COLUMN     "fileId" INTEGER;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "documentationId";

-- AddForeignKey
ALTER TABLE "Documentation" ADD CONSTRAINT "Documentation_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;
