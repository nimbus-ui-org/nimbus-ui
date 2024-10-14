import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Code } from './Code'
import { Text } from '@components/Text'
import { code } from '@nimbus-ui/styled-system/recipes'

const meta = {
  title: 'Typography/Code',
  component: Code,
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
  argTypes: {
    variant: {
      control: 'select',
      options: code.variantMap.variant
    }
  },
  args: {
    fontSize: 'md',
    colorPalette: 'primary'
  },
  render: ({ fontSize, ...args }) => (
    <Text fontSize={fontSize}>
      Don’t forget to remove the <Code {...args}>console.log()</Code> before you commit
    </Text>
  )
}
