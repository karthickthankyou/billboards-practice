import { Inter } from 'next/font/google'
import { AgentPage } from '@billboards-org/ui/src/components/templates/AgentPage'
import { IsLoggedIn } from '@billboards-org/ui/src/components/templates/IsLoggedIn'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Container>
        <IsLoggedIn>{(uid) => <AgentPage uid={uid} />}</IsLoggedIn>
      </Container>
    </main>
  )
}
