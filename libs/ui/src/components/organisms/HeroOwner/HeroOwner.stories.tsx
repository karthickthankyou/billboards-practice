import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HeroOwner } from './HeroOwner'

export default {
  title: 'organisms/HeroOwner',
  component: HeroOwner,
} as ComponentMeta<typeof HeroOwner>

const Template: ComponentStory<typeof HeroOwner> = (args) => (
  <HeroOwner {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
