import '@billboards-web/styles/globals.css'
import '@billboards-web/styles/map.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { AppProps } from 'next/app'
import { ReduxProvider } from '@billboards-org/store/provider'
import { ApolloProvider } from '@billboards-org/network/src/config/apollo'
import { Header } from '@billboards-org/ui/src/components/organisms/Header'
import { Footer } from '@billboards-org/ui/src/components/organisms/Footer'
import { Notifications } from '@billboards-org/ui/src/components/organisms/Notifications'
import { WelcomeDialog } from '@billboards-org/ui/src/components/organisms/WelcomeDialog'
import { AppLevelListeners } from '@billboards-org/ui/src/components/atoms/AppLevelListeners'
import { MenuItem } from '@billboards-org/types'
const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/billboards' },
  { label: 'Expenses', href: '/expenses' },
  { label: 'Favorites', href: '/favorites' },
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
        <Header menuItems={MENUITEMS} sideMenuItems={SUBMENUITEMS} type="" />
        <AppLevelListeners />
        <WelcomeDialog />
        <Component {...pageProps} />
        <Notifications />
        <Footer />
      </ApolloProvider>
    </ReduxProvider>
  )
}
