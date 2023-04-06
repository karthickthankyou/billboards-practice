import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AdvertiserPage } from './AdvertiserPage'

export default {
  title: 'src/components/templates/AdvertiserPage',
  component: AdvertiserPage,
} as ComponentMeta<typeof AdvertiserPage>

const Template: ComponentStory<typeof AdvertiserPage> = (args) => (
  <AdvertiserPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
