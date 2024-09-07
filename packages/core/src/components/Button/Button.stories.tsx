import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { Box } from '@nimbus-ui/styled-system/jsx'

const meta = {
  title: 'Buttons/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ],
  tags: ['autodocs'],
  args: { onPress: fn(() => console.log('pressed')) }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'black',
    children: 'Button'
  }
}
