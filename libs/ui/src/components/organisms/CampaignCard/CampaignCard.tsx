import { GetCampaignsQuery } from '@billboards-org/network/src/generated'
import React, { ReactNode } from 'react'
import { ApproveCampaignButton } from '../../templates/AgentPage/AgentPage'

type CampaignCardProps = {
  campaign: GetCampaignsQuery['campaigns'][0]
  agentOnly?: boolean
}

export const TitleValue = ({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) => {
  return (
    <div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}

export const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  agentOnly = false,
}) => {
  const totalBookings = campaign.bookings.length
  const totalCost = campaign.bookings.reduce(
    (sum, booking) => sum + (booking.pricePerDay || 0),
    0,
  )

  return (
    <div className="w-full ">
      <div className="flex items-baseline gap-3 mb-2">
        <h3 className="font-semibold">{campaign.name}</h3>
        <div>
          <span
            className={`inline-block text-white text-xs py-0.5 px-2 rounded ${
              campaign.status.status === 'LIVE' ? 'bg-green-500 ' : 'bg-gray '
            }`}
          >
            {campaign.status.status}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TitleValue title="Start Date">
          {new Date(campaign.startDate).toLocaleDateString()}
        </TitleValue>
        <TitleValue title="End Date">
          {new Date(campaign.endDate).toLocaleDateString()}
        </TitleValue>
        <TitleValue title="Total Bookings">{totalBookings}</TitleValue>
        <TitleValue title="Total Cost">{totalCost}</TitleValue>
        {agentOnly ? <ApproveCampaignButton campaignId={campaign.id} /> : null}
      </div>
    </div>
  )
}
