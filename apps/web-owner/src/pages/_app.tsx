import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { AppProps } from 'next/app'
import { ReduxProvider } from '@billboards-org/store/provider'
import { ApolloProvider } from '@billboards-org/network/src/config/apollo'
import { Header } from '@billboards-org/ui/src/components/organisms/Header'
import { Footer } from '@billboards-org/ui/src/components/organisms/Footer'
import { Notifications } from '@billboards-org/ui/src/components/organisms/Notifications'
import { AppLevelListeners } from '@billboards-org/ui/src/components/atoms/AppLevelListeners'
import { MenuItem } from '@billboards-org/types'

const MENUITEMS: MenuItem[] = [
  { label: 'Bookings', href: '/bookings' },
  { label: 'Earnings', href: '/earnings' },
]
const SUBMENUITEMS: MenuItem[] = [
  ...MENUITEMS,
  { label: 'About', href: '/about' },
  { label: 'How it works', href: '/how-it-works' },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <Header
          menuItems={MENUITEMS}
          sideMenuItems={SUBMENUITEMS}
          type="owner"
        />
        <AppLevelListeners />
        <Component {...pageProps} />
        <Notifications />
        <Footer />
      </ApolloProvider>
    </ReduxProvider>
  )
}
