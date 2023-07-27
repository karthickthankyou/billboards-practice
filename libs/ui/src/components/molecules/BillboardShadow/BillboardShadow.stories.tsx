import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BillboardShadow } from './BillboardShadow'

export default {
  title: 'src/components/molecules/BillboardShadow',
  component: BillboardShadow,
} as ComponentMeta<typeof BillboardShadow>

const Template: ComponentStory<typeof BillboardShadow> = (args) => (
  <BillboardShadow {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
