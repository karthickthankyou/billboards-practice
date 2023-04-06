import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import Link from 'next/link'
import { CreateAgent } from '@billboards-org/ui/src/components/organisms/CreateAgent'
import { AgentPage } from '@billboards-org/ui/src/components/templates/AgentPage'
import { useEffect } from 'react'
import { useGetAgentLazyQuery } from '@billboards-org/network/src/generated'

const Agent = () => {
  const user = useAppSelector(selectUser)

  const [refetch, { data }] = useGetAgentLazyQuery()

  useEffect(() => {
    if (user.uid) {
      refetch({
        variables: { where: { uid: user.uid } },
      })
    }
  }, [refetch, user.uid])

  if (!user.loaded) {
    return <div>Loading...</div>
  }

  if (!user.uid) {
    return (
      <Container>
        <Link href="/login">Login</Link>
      </Container>
    )
  }

  if (!data?.agent) {
    return <CreateAgent uid={user.uid} />
  }

  return <AgentPage />
}

export default Agent
