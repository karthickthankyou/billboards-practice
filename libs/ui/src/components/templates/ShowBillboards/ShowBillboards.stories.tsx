import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RenderDataWithPagination } from './ShowBillboards'

export default {
  title: 'src/components/templates/ShowBillboards',
  component: RenderDataWithPagination,
} as ComponentMeta<typeof RenderDataWithPagination>

const Template: ComponentStory<typeof RenderDataWithPagination> = (args) => (
  <RenderDataWithPagination {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
