import { BillboardsQuery } from '@billboards-org/network/src/generated'
import React, { ReactNode } from 'react'
import { ApproveBillboardButton } from '../../templates/AgentPage/AgentPage'
import Image from 'next/image'
import { BillboardShadow } from '../../molecules/BillboardShadow'
import { MapLink } from '../../molecules/MapLink'
import { IconLocation } from '@tabler/icons-react'

type BillboardCardProps = {
  billboard: BillboardsQuery['billboards'][0]
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
      <div className="text-sm font-bold">{title}</div>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}

export const BillboardCard: React.FC<BillboardCardProps> = ({ billboard }) => {
  return (
    <div className="w-full ">
      <BillboardShadow>
        <Image
          src={billboard.images?.[0] || ''}
          width={300}
          height={300}
          alt=""
          className="object-cover w-full shadow-xl aspect-square"
        />
      </BillboardShadow>
      <div className="mt-1 space-y-2">
        <div className="flex items-baseline gap-3">
          <h3 className="font-semibold">{billboard.name}</h3>
          <div>
            <span
              className={`inline-block text-white text-xs py-0.5 px-2 rounded ${
                billboard?.status?.status === 'LIVE'
                  ? 'bg-green-200 '
                  : 'bg-gray-200 '
              }`}
            >
              {billboard.status?.status}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TitleValue title="Dimensions">
            {billboard.width} x {billboard.height} m
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
        </div>{' '}
        <MapLink lat={billboard.lat} lng={billboard.lng}>
          <div className="flex items-center gap-2">
            <IconLocation className="text-gray" />
            <p className="py-1 text-sm text-gray ">
              {billboard.address || 'No address provided'}
            </p>
          </div>
        </MapLink>
      </div>
    </div>
  )
}
