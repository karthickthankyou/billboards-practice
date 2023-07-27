import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GetOwnerAccessPage } from './GetAccessPage'

export default {
  title: 'templates/GetOwnerAccessPage',
  component: GetOwnerAccessPage,
} as ComponentMeta<typeof GetOwnerAccessPage>

const Template: ComponentStory<typeof GetOwnerAccessPage> = (args) => (
  <GetOwnerAccessPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
