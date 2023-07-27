import { ReactNode } from 'react'

export interface IBillboardShadowProps {
  children: ReactNode
  className?: string
}

export const BillboardShadow = ({
  children,
  className,
}: IBillboardShadowProps) => {
  return (
    <div
      className={`inline-block bg-gray-50 shadow-gray-100 shadow-[5px_5px_0px_-0px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="-translate-x-2 -translate-y-2">
        <div className="border border-white">{children}</div>
      </div>
    </div>
  )
}
