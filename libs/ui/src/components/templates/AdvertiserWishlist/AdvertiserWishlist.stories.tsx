import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AdvertiserWishlist } from './AdvertiserWishlist'

export default {
  title: 'src/components/templates/AdvertiserWishlist',
  component: AdvertiserWishlist,
} as ComponentMeta<typeof AdvertiserWishlist>

const Template: ComponentStory<typeof AdvertiserWishlist> = (args) => (
  <AdvertiserWishlist {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
