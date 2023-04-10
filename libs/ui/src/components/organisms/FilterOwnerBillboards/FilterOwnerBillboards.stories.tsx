import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterOwnerBillboards } from './FilterOwnerBillboards'

export default {
  title: 'src/components/organisms/FilterOwnerBillboards',
  component: FilterOwnerBillboards,
} as ComponentMeta<typeof FilterOwnerBillboards>

const Template: ComponentStory<typeof FilterOwnerBillboards> = (args) => (
  <FilterOwnerBillboards {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
