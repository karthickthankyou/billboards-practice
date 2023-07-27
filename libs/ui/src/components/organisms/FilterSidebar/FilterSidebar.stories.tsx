import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterSidebar } from './FilterSidebar'

export default {
  title: 'components/organisms/FilterSidebar',
  component: FilterSidebar,
} as ComponentMeta<typeof FilterSidebar>

const Template: ComponentStory<typeof FilterSidebar> = (args) => (
  <FilterSidebar />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
