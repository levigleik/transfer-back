-- DropForeignKey
ALTER TABLE "public"."Documentation" DROP CONSTRAINT "Documentation_fileId_fkey";

-- AddForeignKey
ALTER TABLE "Documentation" ADD CONSTRAINT "Documentation_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
