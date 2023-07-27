import { Inter } from 'next/font/google'
import { OwnerPage } from '@billboards-org/ui/src/components/templates/OwnerPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <OwnerPage />
    </main>
  )
}
