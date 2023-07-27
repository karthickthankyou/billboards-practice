import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IsAgent } from './IsAgent'

export default {
  title: 'src/components/templates/IsAgent',
  component: IsAgent,
} as ComponentMeta<typeof IsAgent>

const Template: ComponentStory<typeof IsAgent> = (args) => <IsAgent {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
