import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterCampaigns } from './FilterCampaigns'

export default {
  title: 'src/components/organisms/FilterCampaigns',
  component: FilterCampaigns,
} as ComponentMeta<typeof FilterCampaigns>

const Template: ComponentStory<typeof FilterCampaigns> = (args) => (
  <FilterCampaigns {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
