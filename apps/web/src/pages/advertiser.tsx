import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import Link from 'next/link'
import { CreateAdvertiser } from '@billboards-org/ui/src/components/organisms/CreateAdvertiser'
import { AdvertiserPage } from '@billboards-org/ui/src/components/templates/AdvertiserPage'
import { useEffect } from 'react'
import { useGetAdvertiserLazyQuery } from '@billboards-org/network/src/generated'

const Advertiser = () => {
  const user = useAppSelector(selectUser)

  const [refetch, { data }] = useGetAdvertiserLazyQuery()

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

  if (!data?.advertiser) {
    return <CreateAdvertiser uid={user.uid} />
  }

  return <AdvertiserPage />
}

export default Advertiser
