import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dialog2 } from './Dialog2'

export default {
  title: 'atoms/Dialog2',
  component: Dialog2,
} as ComponentMeta<typeof Dialog2>

const Template: ComponentStory<typeof Dialog2> = (args) => <Dialog2 {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
