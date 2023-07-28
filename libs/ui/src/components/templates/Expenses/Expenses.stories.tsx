import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Expenses } from './Expenses'

export default {
  title: 'src/components/templates/Expenses',
  component: Expenses,
} as ComponentMeta<typeof Expenses>

const Template: ComponentStory<typeof Expenses> = (args) => (
  <Expenses {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
