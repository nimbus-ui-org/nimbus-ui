import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { ButtonBase } from './ButtonBase'

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
  args: { onPress: fn(() => console.log('pressed')) }
} satisfies Meta<typeof ButtonBase>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Link: Story = {
  args: {
    href: 'https://algoinmotion.xyz',
    target: '_blank',
    children: 'Button'
  }
}
