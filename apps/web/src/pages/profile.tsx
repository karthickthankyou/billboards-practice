import Link from 'next/link'
import { LinkButton } from '@billboards-org/ui/src/components/atoms/LinkButton'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import { TitleValue } from '@billboards-org/ui/src/components/atoms/TitleValue'

const NotLoggedIn = () => (
  <Container className="flex items-center justify-center h-96">
    <div className="space-y-4">
      <div className="text-3xl">You are not logged in.</div>
      <LinkButton className="inline-block" href="/login">
        Login
      </LinkButton>
    </div>
  </Container>
)

const Profile = () => {
  const user = useAppSelector(selectUser)
  if (!user) return <NotLoggedIn />
  // create a component
  return (
    <Container className="grid grid-cols-2 mt-6">
      <div className="flex flex-col max-w-md gap-4 leading-loose text-gray-600">
        <TitleValue title="Display name">{user.displayName || '-'}</TitleValue>
        <TitleValue title="Email">{user.email}</TitleValue>
        <TitleValue title="UID">{user.uid}</TitleValue>
      </div>
    </Container>
  )
}

export default Profile
