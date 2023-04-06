import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DisplayMarkers } from './DisplayMarkers'

export default {
  title: 'src/components/organisms/DisplayMarkers',
  component: DisplayMarkers,
} as ComponentMeta<typeof DisplayMarkers>

const Template: ComponentStory<typeof DisplayMarkers> = (args) => (
  <DisplayMarkers {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
