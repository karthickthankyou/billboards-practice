import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchPageTemplate } from './SearchTemplate'

export default {
  title: 'templates/SearchTemplate',
  component: SearchPageTemplate,
} as ComponentMeta<typeof SearchPageTemplate>

const Template: ComponentStory<typeof SearchPageTemplate> = (args) => (
  <SearchPageTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
