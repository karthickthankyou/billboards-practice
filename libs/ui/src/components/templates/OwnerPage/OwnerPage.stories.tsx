import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OwnerPage } from './OwnerPage'

export default {
  title: 'templates/OwnerPage',
  component: OwnerPage,
} as ComponentMeta<typeof OwnerPage>

const Template: ComponentStory<typeof OwnerPage> = (args) => <OwnerPage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
