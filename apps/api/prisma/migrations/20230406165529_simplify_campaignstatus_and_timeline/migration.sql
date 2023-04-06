-- DropForeignKey
ALTER TABLE "CampaignTimeline" DROP CONSTRAINT "CampaignTimeline_id_fkey";

-- AlterTable
ALTER TABLE "BillboardStatus" ALTER COLUMN "status" SET DEFAULT 'NEW';

-- AlterTable
ALTER TABLE "BillboardTimeline" ALTER COLUMN "status" SET DEFAULT 'NEW';

-- AlterTable
ALTER TABLE "CampaignTimeline" ADD COLUMN     "status" "CampaignStatusType" NOT NULL DEFAULT 'NEW';
