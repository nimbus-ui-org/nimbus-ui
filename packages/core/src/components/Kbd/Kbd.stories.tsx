import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Kbd } from './Kbd'
import { Text } from '@components/Text'

const meta = {
  title: 'Typography/Kbd',
  component: Kbd,
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
    fontSize: 'md'
  },
  render: ({ fontSize, ...args }) => (
    <Text fontSize={fontSize}>
      Press <Kbd {...args}>Shift</Kbd> + <Kbd {...args}>M</Kbd> to open the map
    </Text>
  )
}
