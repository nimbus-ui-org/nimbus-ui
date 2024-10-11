import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Heading } from './Heading'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
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
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6]
    }
  },
  render: (args) => <Heading {...args}>This is level {args.level || 3} Heading</Heading>
}

export const Variants = () => {
  return [1, 2, 3, 4, 5, 6].map((level) => (
    <Heading key={`${level}`} level={level}>
      This is level {level} Heading
    </Heading>
  ))
}
