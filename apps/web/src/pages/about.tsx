import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import { Masonry2 } from '@billboards-org/ui/src/components/templates/Masonry2'
import Image from 'next/image'

export const sampleImages = [
  'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648215863/nike/ikea/furni-4_ik1ofy.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648215649/nike/ikea/furni-03_omo7ch.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648215448/nike/ikea/furniture-02_ekpfno.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648208734/nike/ikea/room01_udxetf.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648662487/IKEA/andrea-davis-duXRC8vT5wQ-unsplash_uugrpn.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648661101/IKEA/jake-goossen-juhD3QGCv20-unsplash_jiwsem.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648661059/IKEA/giorgio-trovato-CgXnJ4Z5KFI-unsplash_moggxx.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648657852/IKEA/sarah-dorweiler-0QmzQZndkOQ-unsplash_e5tys0.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648653471/IKEA/deconovo-JlHYZil96lQ-unsplash_vs5suf.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648657752/IKEA/samantha-gades-BlIhVfXbi9s-unsplash_gvzqkh.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1648659098/IKEA/olena-sergienko-mdzHRYPKt5s-unsplash_mhr2ma.jpg',
]

const About = () => {
  // create a component
  return (
    <Container className="grid grid-cols-2 mt-6">
      <div className="flex flex-col max-w-md gap-4 leading-loose text-gray-600">
        <h1 className="text-2xl"> About </h1>
        <p>What&apos;s up, buttercups?</p>
        <p>
          Welcome to Billboards, the company that makes it easy for advertisers
          to get their ads on the best billboards around town. With our
          user-friendly platform, you can search for available billboards on a
          map and create your campaign in no time - no need to worry about
          boring paperwork or complicated contracts.
        </p>
        <p>
          But don&apos;t just take our word for it. We&apos;ve been in the
          billboard business since 2000, and we&apos;ve seen it all. Remember
          the internet stock crash of 2000? Yeah, we survived that (barely). And
          since then, we&apos;ve helped thousands of businesses get their ads
          out there and reach their target audience.
        </p>
        <p>
          So if you&apos;re ready to take your advertising to the next level,
          give us a shout. Our team of experts is here to help you every step of
          the way. And hey, don&apos;t worry - we&apos;ll keep things fun,
          friendly, and (dare we say it?) even a little bit funny.
        </p>{' '}
        <p>Thanks for considering us! </p>
        <p className="font-medium">The Billboards Team</p>
      </div>
      <div className="h-screen overflow-y-scroll thin-scrollbar">
        <Masonry2
          columns="3"
          gap="4"
          shortOnes={[1, 2, 3]}
          childrenLimit={15}
          className="z-0 hidden lg:block"
          heights={['h-72', 'h-112']}
        >
          {sampleImages.map((item) => (
            <Image
              width={200}
              height={200}
              key={item}
              alt=""
              src={item}
              className="w-full h-full shadow-lg"
            />
          ))}
        </Masonry2>
      </div>
    </Container>
  )
}

export default About
