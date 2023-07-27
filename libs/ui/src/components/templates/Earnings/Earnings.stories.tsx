import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Earnings } from './Earnings'

export default {
  title: 'src/components/templates/Earnings',
  component: Earnings,
} as ComponentMeta<typeof Earnings>

const Template: ComponentStory<typeof Earnings> = (args) => (
  <Earnings {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
