import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { ButtonBase } from './ButtonBase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Buttons/ButtonBase',
  component: ButtonBase,
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ],
  args: { onPress: fn(() => {}) }
} satisfies Meta<typeof ButtonBase>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const UnstyledButton: Story = {
  args: {
    children: 'Unstyled Button'
  }
}
