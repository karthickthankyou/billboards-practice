import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const deleteAll = async () => {
  await prisma.booking.deleteMany()
  await prisma.campaignTimeline.deleteMany()
  await prisma.campaignStatus.deleteMany()
  await prisma.campaign.deleteMany()
  await prisma.favorite.deleteMany()
  await prisma.billboardTimeline.deleteMany()
  await prisma.billboardStatus.deleteMany()
  await prisma.billboard.deleteMany()

  //   Users
  await prisma.advertiser.deleteMany()
  await prisma.agent.deleteMany()
  await prisma.owner.deleteMany()
}

const reset = async () => {
  await deleteAll()
}

const main = async () => {
  await reset()
}

main()
