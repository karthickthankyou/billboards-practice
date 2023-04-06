import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TitleValue } from './TitleValue'

export default {
  title: 'atoms/Brand',
  component: TitleValue,
} as ComponentMeta<typeof TitleValue>

const Template: ComponentStory<typeof TitleValue> = (args) => (
  <TitleValue {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Children',
  title: 'Title',
}
Primary.parameters = {}
