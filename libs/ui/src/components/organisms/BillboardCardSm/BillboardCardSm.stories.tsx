import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BillboardCardSm } from './BillboardCardSm'

export default {
  title: 'src/components/organisms/BillboardCardSm',
  component: BillboardCardSm,
} as ComponentMeta<typeof BillboardCardSm>

const Template: ComponentStory<typeof BillboardCardSm> = (args) => (
  <BillboardCardSm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
