import { BillboardShadow } from '../../molecules/BillboardShadow'

export interface IBrandProps {
  className?: string
  type?: 'admin' | 'owner' | 'agent' | ''
}

export const Brand = ({ className, type = '' }: IBrandProps) => {
  return (
    <div className="flex items-start gap-2">
      <BillboardShadow>
        <div className={`bg-gray-25 px-2 font-black text-2xl`}>
          {'Billboards.'}
        </div>
      </BillboardShadow>

      {type ? (
        <div className="px-1 text-xs shadow-lg text-gray">{type}</div>
      ) : null}
    </div>
  )
}
