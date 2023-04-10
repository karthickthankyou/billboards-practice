import Head from 'next/head'
import { Hero } from '@billboards-org/ui/src/components/organisms/Hero'
import { HeroOwner } from '@billboards-org/ui/src/components/organisms/HeroOwner'
import {
  BillboardCity,
  MovingCamera,
  MovingAroundCityCamera,
} from '../components/BillboardCity'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BillboardCity>
          <div className="container mx-auto space-y-2 text-left">
            <h1 className="font-black text-8xl">Stand out.</h1>
            <p className="max-w-xs">
              Elevate your brand with strategic billboard advertising in prime
              locations!
            </p>
            <button
              onClick={() => router.push('/billboards')}
              className="px-3 py-1 text-black bg-white rounded-0"
            >
              Find ad spaces
            </button>
          </div>
        </BillboardCity>
        <div className="h-24 bg-black" />
        <BillboardCity camera={<MovingAroundCityCamera />} height="h-[76vh]">
          <div className="container z-10 mx-auto space-y-2 text-left">
            <h1 className="font-black text-8xl">Install our billboards!</h1>
            <p className="max-w-xs">
              Discover how our billboards can turn your property into a
              consistent income source. Join us today!
            </p>
            <button
              className="px-3 py-1 text-black bg-white rounded-0"
              onClick={() => router.push('/owner')}
            >
              List your space
            </button>
          </div>
        </BillboardCity>{' '}
        <div className="h-24 bg-black" />
      </main>
    </>
  )
}
