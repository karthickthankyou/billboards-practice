import { IsLoggedIn } from '@billboards-org/ui/src/components/templates/IsLoggedIn'
import { IsAgent } from '@billboards-org/ui/src/components/templates/IsAgent'
import Head from 'next/head'
import { ShowCampaignsAgent } from '@billboards-org/ui/src/components/templates/AgentPage/AgentPage'
import { FormProviderFilterCampaigns } from '@billboards-org/forms/src/filterCampaigns'
import { FilterCampaigns } from '@billboards-org/ui/src/components/organisms/FilterCampaigns'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'

export default function Login() {
  return (
    <>
      <Head>
        <title>Campaigns | Agent | Karthick Ragavendran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <IsLoggedIn>
            {(uid) => (
              <IsAgent uid={uid}>
                <FormProviderFilterCampaigns>
                  <div className="flex justify-end my-2">
                    <FilterCampaigns />
                  </div>

                  <ShowCampaignsAgent />
                </FormProviderFilterCampaigns>
              </IsAgent>
            )}
          </IsLoggedIn>
        </Container>
      </main>
    </>
  )
}
