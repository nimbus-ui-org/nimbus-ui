import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Text } from '@components/Text'
import { Quote } from '@components/Quote'

const meta = {
  title: 'Typography/Quote',
  component: Quote,
  decorators: [
    (Story) => (
      <Box p="14">
        <Story />
      </Box>
    )
  ]
} satisfies Meta

export default meta

type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Playground: Story = {
  args: {
    fontSize: 'lg'
  },
  render: (args) => (
    <Text {...args}>
      I once said,{' '}
      <Quote>
        If you’re always in doubt whether things work out for you or not - you might be a
        programmer.
      </Quote>{' '}
      - me.
    </Text>
  )
}
