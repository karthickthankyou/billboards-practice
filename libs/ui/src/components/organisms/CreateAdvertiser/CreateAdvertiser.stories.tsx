import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateAdvertiser } from './CreateAdvertiser'

export default {
  title: 'src/components/organisms/CreateAdvertiser',
  component: CreateAdvertiser,
} as ComponentMeta<typeof CreateAdvertiser>

const Template: ComponentStory<typeof CreateAdvertiser> = (args) => (
  <CreateAdvertiser {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
