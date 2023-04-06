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
    <div
      className={`flex flex-col items-center justify-center shadow-lg transform w-5 h-5  border-b-2 border-black cursor-pointer shadow-black/50 `}
    >
      <div className="flex">
        <div className="w-10 h-5 border shadow-lg trapezium shadow-black bg-gradient-to-t from-black to-transparent" />
        {/* <IconArrowUp className="p-1 font-black text-black stroke-[2] bg-white -rotate-45" /> */}
        {/* <IconArrowUp className="p-1 font-black text-black stroke-[3]" /> */}
        {/* <IconArrowUp className="p-1 font-black text-black stroke-[2]  rotate-45" /> */}
      </div>
      {/* <div className="w-6 h-0.5 bg-black" /> */}
      {/* <div className="w-2 h-0.5 bg-black" /> */}
    </div>
  )
}
