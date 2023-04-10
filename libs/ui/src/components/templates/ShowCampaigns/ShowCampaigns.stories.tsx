import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShowCampaigns } from './ShowCampaigns'

export default {
  title: 'src/components/templates/ShowCampaigns',
  component: ShowCampaigns,
} as ComponentMeta<typeof ShowCampaigns>

const Template: ComponentStory<typeof ShowCampaigns> = (args) => (
  <ShowCampaigns {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
