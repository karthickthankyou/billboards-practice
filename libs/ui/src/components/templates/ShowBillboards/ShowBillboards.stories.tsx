import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShowBillboards } from './ShowBillboards'

export default {
  title: 'src/components/templates/ShowBillboards',
  component: ShowBillboards,
} as ComponentMeta<typeof ShowBillboards>

const Template: ComponentStory<typeof ShowBillboards> = (args) => (
  <ShowBillboards {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
