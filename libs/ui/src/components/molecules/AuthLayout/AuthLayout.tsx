import { ReactNode } from 'react'
import { Container } from '../../atoms/Container'

export interface IAuthLayoutProps {
  children: ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: IAuthLayoutProps) => {
  return (
    <div className="bg-gray-100 h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="w-full max-w-lg p-4 mx-auto mb-24">
        <h1 className="mb-2 ml-4 text-2xl text-left">{title}</h1>
        <div className="w-full max-w-lg p-4 mx-auto bg-white">{children}</div>
      </div>
    </div>
  )
}
