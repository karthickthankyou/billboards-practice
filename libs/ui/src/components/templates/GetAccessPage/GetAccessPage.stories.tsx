import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GetAccessPage } from './GetAccessPage'

export default {
  title: 'templates/GetAccessPage',
  component: GetAccessPage,
} as ComponentMeta<typeof GetAccessPage>

const Template: ComponentStory<typeof GetAccessPage> = (args) => (
  <GetAccessPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
