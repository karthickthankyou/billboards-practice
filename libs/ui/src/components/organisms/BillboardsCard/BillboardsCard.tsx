import { GetBillboardsQuery } from '@billboards-org/network/src/generated'
import React, { ReactNode } from 'react'
import { ApproveBillboardButton } from '../../templates/AgentPage/AgentPage'

type BillboardCardProps = {
  billboard: GetBillboardsQuery['billboards'][0]
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

export const BillboardCard: React.FC<BillboardCardProps> = ({
  billboard,
  agentOnly,
}) => {
  console.log('billboard', billboard)
  return (
    <div className="w-full ">
      <div className="flex items-baseline gap-3 mb-2">
        <h3 className="font-semibold">{billboard.name}</h3>
        <div>
          <span
            className={`inline-block text-white text-xs py-0.5 px-2 rounded ${
              billboard.status.status === 'LIVE' ? 'bg-green-500 ' : 'bg-gray '
            }`}
          >
            {billboard.status.status}
          </span>
        </div>
      </div>
      <p className="mb-3 text-sm text-gray-600">
        {billboard.address || 'No address provided'}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <TitleValue title="Dimensions">
          {billboard.width} x {billboard.height}ft
        </TitleValue>
        <TitleValue title="Angle">
          <p className="text-gray-600">{billboard.angle || 'N/A'}</p>
        </TitleValue>
        <TitleValue title="Price per Day">
          <p className="text-gray-600">{billboard.pricePerDay || 'N/A'}</p>
        </TitleValue>
        <TitleValue title="Min Booking Days">
          <p className="text-gray-600">{billboard.minBookingDays || 'N/A'}</p>
        </TitleValue>
        {agentOnly ? (
          <ApproveBillboardButton billboardId={billboard.id} />
        ) : null}
      </div>
    </div>
  )
}
