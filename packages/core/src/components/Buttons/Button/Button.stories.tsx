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
  args: { onPress: fn(() => console.log('pressed')) }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Primary: Story = {
  args: {
    children: 'Button kjfdlskfj lskdfj',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    isDisabled: false,
    loaderProps: { variant: 'dots' },
    'aria-label': 'Nimbus Button'
  }
}

export const Test = () => {
  return (
    <div className="group">
      <Button variant="link" px="0" height="auto">
        Button kjfdlskfj lskdfj
      </Button>
    </div>
  )
}
