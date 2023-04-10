//please create react component. Come on do not create a comment. Create a component

import { Container } from '@billboards-org/ui/src/components/atoms/Container'

const How = () => {
  // create a component
  return (
    <Container className="flex text-lg leading-loose">
      <div className="max-w-md gap-4">
        <h1 className="text-2xl font-semibold">How it works?</h1>
        <ul className="space-y-4">
          <li>Owners request to place their billboards on our site</li>
          <li>
            Our team of agents verifies the request and visits the site to
            approve it
          </li>
          <li>
            Our team of skilled billboard installers gets to work and installs
            the billboard in under 24 hours (faster than a New York minute!)
          </li>{' '}
          <li>
            Advertisers can search for available billboards on a map and create
            their campaign in just a few clicks
          </li>{' '}
          <li>
            Once the campaign is approved, our team of installers updates the
            billboard with the new ad in under 24 hours (because who wants to
            wait around for a billboard to be updated?)
          </li>{' '}
          <li>
            Sit back, relax, and watch your business grow thanks to the power of
            billboard advertising!
          </li>{' '}
          Thanks for considering us!
        </ul>
        <br />
        The Billboards Team
      </div>
    </Container>
  )
}

export default How
