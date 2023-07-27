import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, Tab, TabPanel } from './Tabs'
import { useState } from 'react'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState(0)

    return (
      <>
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          aria-label="bookings"
        >
          <Tab label={'Say hello'} />
          <Tab label={'Say hey!'} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="flex items-center justify-center h-64 bg-gray-50">
            Hello!
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex items-center justify-center h-64 bg-gray-50">
            Hey!
          </div>
        </TabPanel>
      </>
    )
  },
}
