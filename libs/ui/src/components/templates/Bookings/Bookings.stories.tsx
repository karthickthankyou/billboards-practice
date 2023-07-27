import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Bookings } from './Bookings'

export default {
  title: 'src/components/templates/Bookings',
  component: Bookings,
} as ComponentMeta<typeof Bookings>

const Template: ComponentStory<typeof Bookings> = (args) => (
  <Bookings {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
