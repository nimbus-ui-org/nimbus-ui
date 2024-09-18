import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Loader } from './Loader'

const meta = {
  title: 'Feedback/Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Bars: Story = {
  args: {
    variant: 'spinner',
    size: 'md'
  }
}
