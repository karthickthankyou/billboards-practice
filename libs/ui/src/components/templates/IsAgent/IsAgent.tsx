import { ReactNode } from 'react'
import { useAgentMeQuery } from '@billboards-org/network/src/generated'
import { CreateAgent } from '../../organisms/CreateAgent'
import { LoaderPanel } from '../../molecules/Loader'

type RenderPropChild = (uid: string) => ReactNode
export interface IIsAgentProps {
  children: RenderPropChild | ReactNode
  uid: string
}
export const IsAgent = ({ children, uid }: IIsAgentProps) => {
  const { data, loading } = useAgentMeQuery()

  if (loading) {
    return <LoaderPanel />
  }

  if (!data?.agentMe) {
    return <CreateAgent uid={uid} />
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(uid)
        : children}
    </>
  )
}
