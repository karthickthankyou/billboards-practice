/*
  Warnings:

  - The values [APPROVED,INSTALLATION_INPROGRESS] on the enum `BillboardStatusType` will be removed. If these variants are still used in the database, this will fail.
  - The values [APPROVED,INSTALLATION_INPROGRESS] on the enum `CampaignStatusType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BillboardStatusType_new" AS ENUM ('NEW', 'VERIFIED', 'ON_HOLD', 'REJECTED', 'INPROGRESS', 'LIVE');
ALTER TABLE "BillboardTimeline" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "BillboardStatus" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "BillboardStatus" ALTER COLUMN "status" TYPE "BillboardStatusType_new" USING ("status"::text::"BillboardStatusType_new");
ALTER TABLE "BillboardTimeline" ALTER COLUMN "status" TYPE "BillboardStatusType_new" USING ("status"::text::"BillboardStatusType_new");
ALTER TYPE "BillboardStatusType" RENAME TO "BillboardStatusType_old";
ALTER TYPE "BillboardStatusType_new" RENAME TO "BillboardStatusType";
DROP TYPE "BillboardStatusType_old";
ALTER TABLE "BillboardTimeline" ALTER COLUMN "status" SET DEFAULT 'NEW';
ALTER TABLE "BillboardStatus" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CampaignStatusType_new" AS ENUM ('NEW', 'VERIFIED', 'ON_HOLD', 'REJECTED', 'INPROGRESS', 'LIVE');
ALTER TABLE "CampaignTimeline" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "CampaignStatus" ALTER COLUMN "status" TYPE "CampaignStatusType_new" USING ("status"::text::"CampaignStatusType_new");
ALTER TABLE "CampaignTimeline" ALTER COLUMN "status" TYPE "CampaignStatusType_new" USING ("status"::text::"CampaignStatusType_new");
ALTER TYPE "CampaignStatusType" RENAME TO "CampaignStatusType_old";
ALTER TYPE "CampaignStatusType_new" RENAME TO "CampaignStatusType";
DROP TYPE "CampaignStatusType_old";
ALTER TABLE "CampaignTimeline" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;
