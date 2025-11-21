-- AlterTable
ALTER TABLE "GasSupply" ADD COLUMN     "fileId" INTEGER;

-- AddForeignKey
ALTER TABLE "GasSupply" ADD CONSTRAINT "GasSupply_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
