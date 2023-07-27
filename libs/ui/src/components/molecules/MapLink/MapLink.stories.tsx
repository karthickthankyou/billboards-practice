import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MapLink } from './MapLink'

export default {
  title: 'components/atoms/MapLink',
  component: MapLink,
} as ComponentMeta<typeof MapLink>

const Template: ComponentStory<typeof MapLink> = (args) => <MapLink {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
