import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BillboardCard } from './BillboardsCard'

export default {
  title: 'src/components/organisms/BillboardsCard',
  component: BillboardCard,
} as ComponentMeta<typeof BillboardCard>

const Template: ComponentStory<typeof BillboardCard> = (args) => (
  <BillboardCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
