import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import { AdvertiserPage } from '@billboards-org/ui/src/components/templates/AdvertiserPage'
import { IsLoggedIn } from '@billboards-org/ui/src/components/templates/IsLoggedIn'

const Advertiser = () => {
  return (
    <Container>
      <IsLoggedIn>{(uid) => <AdvertiserPage uid={uid} />}</IsLoggedIn>
    </Container>
  )
}

export default Advertiser
