import { IconMap, IconMap2 } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface IMapLinkProps {
  lat: number
  lng: number
  children?: ReactNode
}

export const MapLink = ({
  lat,
  lng,
  children = <IconMap2 />,
}: IMapLinkProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}
