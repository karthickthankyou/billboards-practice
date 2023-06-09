import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hero } from './Hero'

export default {
  title: 'organisms/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
