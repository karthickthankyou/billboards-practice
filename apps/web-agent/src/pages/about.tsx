import { Container } from '@billboards-org/ui/src/components/atoms/Container'

const About = () => {
  return (
    <Container className="grid grid-cols-2 mt-6">
      <div className="flex flex-col max-w-md gap-4 text-lg leading-loose">
        <h1 className="text-2xl font-semibold"> About </h1>
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
    </Container>
  )
}

export default About
