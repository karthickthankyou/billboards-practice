import { BillboardTypeText } from '@billboards-org/forms'
import {
  BillboardPublic,
  SearchBillboardsQuery,
} from '@billboards-org/network/src/generated'

export interface IBillboardCardSmProps {
  billboard: SearchBillboardsQuery['searchBillboards'][0]
}

export const BillboardCardSm: React.FC<IBillboardCardSmProps> = ({
  billboard,
}) => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col">
        <img
          className="object-cover object-center w-full h-48 rounded-sm"
          src={'/placeholder.jpg'}
          alt="Billboard"
        />
        <div className="p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {BillboardTypeText[billboard.type]}
            </h3>
            <span className="text-sm text-gray-500">#{billboard.id}</span>
          </div>
          <div className="mt-4">
            <p>${billboard.pricePerDay?.toFixed(2)} per day</p>
            <p>
              {billboard.width} x {billboard.height} ft
            </p>
            <p>{billboard.impressionsPerDay} impressions per day</p>
          </div>
        </div>
      </div>
    </div>
  )
}
