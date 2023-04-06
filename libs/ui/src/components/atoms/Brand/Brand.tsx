export interface IBrandProps {
  shortForm?: boolean
  className?: string
}

export const Brand = ({ shortForm = false, className }: IBrandProps) => {
  return (
    <div className="inline-block shadow-gray-100 shadow-[5px_5px_0px_-0px_rgba(0,0,0,0.3)]">
      <div
        className={`bg-gray-50 px-2 leading-none select-none border-2 border-white font-black text-2xl ${className}`}
      >
        {shortForm ? 'B.' : 'Billboards.'}
      </div>
    </div>
  )
}
