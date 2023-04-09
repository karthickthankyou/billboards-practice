import { useGetOwnerLazyQuery } from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import { OwnerPage } from '@billboards-org/ui/src/components/templates/OwnerPage'
import { GetAccessPage } from '@billboards-org/ui/src/components/templates/GetAccessPage'
import Link from 'next/link'
import { useEffect } from 'react'
import { CreateBillboard } from '@billboards-org/ui/src/components/templates/CreateBillboard'

const CreateBillboardPage = () => {
  const user = useAppSelector(selectUser)

  const [getOwner, { data }] = useGetOwnerLazyQuery()

  useEffect(() => {
    if (user.uid) {
      getOwner({ variables: { where: { uid: user.uid } } })
    }
  }, [getOwner, user.uid])

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

  if (!data?.owner) {
    return <GetAccessPage />
  }

  return <CreateBillboard />
}

export default CreateBillboardPage
