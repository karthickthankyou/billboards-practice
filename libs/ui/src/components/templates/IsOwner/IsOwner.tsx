import { useGetOwnerQuery } from '@billboards-org/network/src/generated'
import { GetOwnerAccessPage } from '../GetAccessPage'
import { ReactNode } from 'react'
import { LoaderPanel } from '../../molecules/Loader'

export interface IIsOwnerProps {
  uid: string
}
export interface IIsOwnerProps {
  children: RenderPropChild | ReactNode
  uid: string
}
type RenderPropChild = (uid: string) => ReactNode

export const IsOwner = ({ children, uid }: IIsOwnerProps) => {
  const { data, loading } = useGetOwnerQuery({ variables: { where: { uid } } })
  if (loading) {
    return <LoaderPanel />
  }
  if (!data?.owner) {
    return <GetOwnerAccessPage uid={uid} />
  }
  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(uid)
        : children}
    </>
  )
}
