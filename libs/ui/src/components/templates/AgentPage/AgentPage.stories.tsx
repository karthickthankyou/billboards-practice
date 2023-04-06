import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AgentPage } from './AgentPage'

export default {
  title: 'src/components/templates/AgentPage',
  component: AgentPage,
} as ComponentMeta<typeof AgentPage>

const Template: ComponentStory<typeof AgentPage> = (args) => (
  <AgentPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
