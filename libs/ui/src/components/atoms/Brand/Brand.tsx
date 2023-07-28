import { BillboardShadow } from '../../molecules/BillboardShadow'

export interface IBrandProps {
  className?: string
  type?: 'admin' | 'owner' | 'agent' | ''
}

export const Brand = ({ className, type = '' }: IBrandProps) => {
  return (
    <div>
      <div className="flex items-start gap-2">
        <BillboardShadow>
          <div className={`bg-gray-25 px-1`}>
            <div className="text-xl font-black leading-6">Billboards.</div>
            <div className="text-xs text-gray">Karthick Ragavendran</div>
          </div>
        </BillboardShadow>
        {type ? (
          <div className="px-1 text-xs shadow-lg text-gray">{type}</div>
        ) : null}
      </div>
    </div>
  )
}
