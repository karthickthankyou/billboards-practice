import {
  IconArrowAutofitUp,
  IconArrowBarUp,
  IconArrowsUp,
  IconArrowUp,
  IconArrowUpCircle,
} from '@tabler/icons-react'

export type IconBillboardType = 'front' | 'top'
export const IconBillboard = ({ type }: { type: IconBillboardType }) => {
  if (type === 'front') return <FrontAngle />
  if (type === 'top') return <TopAngle />
  return null
}

export const FrontAngle = () => (
  <div className="flex flex-col items-center origin-bottom">
    <div className="flex items-center justify-center w-5 h-5 text-xs font-black text-white border-2 border-black rounded-sm shadow-lg shadow-black bg-black/50">
      B.
    </div>
    <div className="w-0.5 h-1 bg-black " />
  </div>
)

export const TopAngle = () => {
  return (
    <div className="flex flex-col items-center justify-center w-6 h-6 rounded-full cursor-pointer bg-black/10">
      <div className="w-5 h-0.5 bg-black" />
      <div className="w-2 h-0.5 bg-black" />
    </div>
  )
}
