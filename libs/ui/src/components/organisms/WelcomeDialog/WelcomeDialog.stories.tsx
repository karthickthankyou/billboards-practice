import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { WelcomeDialog } from './WelcomeDialog'

export default {
  title: 'src/components/organisms/WelcomeDialog',
  component: WelcomeDialog,
} as ComponentMeta<typeof WelcomeDialog>

const Template: ComponentStory<typeof WelcomeDialog> = (args) => (
  <WelcomeDialog {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
