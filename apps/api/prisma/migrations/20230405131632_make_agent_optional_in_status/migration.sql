-- DropForeignKey
ALTER TABLE "BillboardStatus" DROP CONSTRAINT "BillboardStatus_agentId_fkey";

-- AlterTable
ALTER TABLE "BillboardStatus" ALTER COLUMN "agentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BillboardStatus" ADD CONSTRAINT "BillboardStatus_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
