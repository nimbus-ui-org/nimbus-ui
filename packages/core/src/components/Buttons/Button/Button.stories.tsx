import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { css } from '@nimbus-ui/styled-system/css'

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
  args: { onPress: fn(() => console.log('pressed')) }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Primary: Story = {
  args: {
    className: css({
      color: 'colorPalette.outline.text',
      colorPalette: 'primary',
      bg: 'colorPalette.outline',
      borderRadius: 'default',
      border: 'xs',
      // fontSize: 'lg',
      fontWeight: 'medium',
      borderColor: 'colorPalette.border',
      transition: 'colors',
      py: '2',
      px: '3',
      _hovered: {
        bg: 'colorPalette.outline.hover',
        borderColor: 'colorPalette.border.hover'
      },
      _pressed: {
        bg: 'colorPalette.outline.active',
        borderColor: 'colorPalette.border.active'
      },
      outline: 'none',
      reducedMotion: 'preference',
      cursorType: 'preference',
      mx: '3.5',
      my: '4'
    }),
    fontSize: '2xl',
    children: 'Button'
  }
}
