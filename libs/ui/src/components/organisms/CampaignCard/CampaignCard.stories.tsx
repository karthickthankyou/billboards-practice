import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CampaignCard } from './CampaignCard'

export default {
  title: 'src/components/organisms/CampaignCard',
  component: CampaignCard,
} as ComponentMeta<typeof CampaignCard>

const Template: ComponentStory<typeof CampaignCard> = (args) => (
  <CampaignCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
