import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IsOwner } from './IsOwner'

export default {
  title: 'src/components/templates/IsOwner',
  component: IsOwner,
} as ComponentMeta<typeof IsOwner>

const Template: ComponentStory<typeof IsOwner> = (args) => <IsOwner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
