import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateAgent } from './CreateAgent'

export default {
  title: 'src/components/organisms/CreateAgent',
  component: CreateAgent,
} as ComponentMeta<typeof CreateAgent>

const Template: ComponentStory<typeof CreateAgent> = (args) => (
  <CreateAgent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
