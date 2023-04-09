import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateBillboard } from './CreateBillboard'

export default {
  title: 'src/components/templates/CreateBillboard',
  component: CreateBillboard,
} as ComponentMeta<typeof CreateBillboard>

const Template: ComponentStory<typeof CreateBillboard> = (args) => (
  <CreateBillboard />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
