-- CreateEnum
CREATE TYPE "BillboardType" AS ENUM ('CLASSIC', 'VINYL', 'LED', 'NEON', 'THREE_DIMENSIONAL');

-- CreateEnum
CREATE TYPE "BillboardStatusType" AS ENUM ('NEW', 'VERIFIED', 'APPROVED', 'ON_HOLD', 'REJECTED', 'INSTALLATION_INPROGRESS', 'LIVE');

-- CreateEnum
CREATE TYPE "CampaignStatusType" AS ENUM ('NEW', 'VERIFIED', 'APPROVED', 'ON_HOLD', 'REJECTED', 'INSTALLATION_INPROGRESS', 'LIVE');

-- CreateTable
CREATE TABLE "Favorite" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "advertiserId" TEXT NOT NULL,
    "billboardId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("advertiserId","billboardId")
);

-- CreateTable
CREATE TABLE "Owner" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Agent" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Advertiser" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Advertiser_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Billboard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "pricePerDay" DOUBLE PRECISION,
    "impressionsPerDay" INTEGER,
    "minBookingDays" INTEGER,
    "address" TEXT,
    "images" TEXT[],
    "type" "BillboardType" NOT NULL,
    "ownerId" TEXT NOT NULL,
    "angle" INTEGER,
    "elevation" INTEGER,

    CONSTRAINT "Billboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillboardStatus" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "status" "BillboardStatusType" NOT NULL,
    "billboardId" INTEGER NOT NULL,
    "agentId" TEXT NOT NULL,

    CONSTRAINT "BillboardStatus_pkey" PRIMARY KEY ("billboardId")
);

-- CreateTable
CREATE TABLE "BillboardTimeline" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "billboardId" INTEGER NOT NULL,
    "agentId" TEXT,
    "status" "BillboardStatusType" NOT NULL,

    CONSTRAINT "BillboardTimeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "advertiserId" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pricePerDay" DOUBLE PRECISION,
    "campaignId" INTEGER,
    "billboardId" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignStatus" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "CampaignStatusType" NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "agentId" TEXT,

    CONSTRAINT "CampaignStatus_pkey" PRIMARY KEY ("campaignId")
);

-- CreateTable
CREATE TABLE "CampaignTimeline" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "agentId" TEXT,

    CONSTRAINT "CampaignTimeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_advertiserId_fkey" FOREIGN KEY ("advertiserId") REFERENCES "Advertiser"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_billboardId_fkey" FOREIGN KEY ("billboardId") REFERENCES "Billboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billboard" ADD CONSTRAINT "Billboard_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillboardStatus" ADD CONSTRAINT "BillboardStatus_billboardId_fkey" FOREIGN KEY ("billboardId") REFERENCES "Billboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillboardStatus" ADD CONSTRAINT "BillboardStatus_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillboardTimeline" ADD CONSTRAINT "BillboardTimeline_billboardId_fkey" FOREIGN KEY ("billboardId") REFERENCES "Billboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillboardTimeline" ADD CONSTRAINT "BillboardTimeline_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_advertiserId_fkey" FOREIGN KEY ("advertiserId") REFERENCES "Advertiser"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_billboardId_fkey" FOREIGN KEY ("billboardId") REFERENCES "Billboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignStatus" ADD CONSTRAINT "CampaignStatus_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignStatus" ADD CONSTRAINT "CampaignStatus_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignTimeline" ADD CONSTRAINT "CampaignTimeline_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignTimeline" ADD CONSTRAINT "CampaignTimeline_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignTimeline" ADD CONSTRAINT "CampaignTimeline_id_fkey" FOREIGN KEY ("id") REFERENCES "CampaignStatus"("campaignId") ON DELETE RESTRICT ON UPDATE CASCADE;
