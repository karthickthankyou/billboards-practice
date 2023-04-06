import { IconDoor, IconKeyboard, IconKeyboardHide } from '@tabler/icons-react'
import { ReactNode } from 'react'

export interface IMarkerDesignProps {
  text: ReactNode
}

export const MarkerDesign = ({ text }: IMarkerDesignProps) => {
  return (
    <div className="inline-block ">
      <div className="flex flex-col justify-center gap-1 ">
        <div className="flex items-center justify-center text-white border border-white rounded-full shadow-lg w-7 h-7 shadow-black/10 bg-black/80 backdrop-blur-md">
          <IconKeyboardHide className="w-4 h-4 transform rotate-45" />
        </div>
        <div className="text-center">{text}</div>
      </div>
    </div>
  )
}
