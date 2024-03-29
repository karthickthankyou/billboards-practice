import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import Link from 'next/link'
import { LoaderPanel } from '../../molecules/Loader'

import { ReactNode } from 'react'
import { AlertSection } from '../../organisms/AlertSection'

type RenderPropChild = (uid: string) => ReactNode

export const IsLoggedIn = ({
  children,
  notLoggedIn,
}: {
  children: RenderPropChild | ReactNode
  notLoggedIn?: ReactNode
}) => {
  const { uid, loaded } = useAppSelector(selectUser)

  if (!loaded) {
    return <LoaderPanel />
  }

  if (!uid) {
    if (notLoggedIn) {
      return <>{notLoggedIn}</>
    } else {
      return (
        <AlertSection title="Login to continue.">
          <Link href="/login">Login</Link>
        </AlertSection>
      )
    }
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(uid)
        : children}
    </>
  )
}
