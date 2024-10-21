import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex } from '@nimbus-ui/styled-system/jsx'
import { Separator } from './Separator'
import { Text } from '@components/Text'
import { separator } from '@nimbus-ui/styled-system/recipes'

const meta = {
  title: 'Data Display/Separator',
  component: Separator,
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
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    size: {
      control: 'select',
      options: separator.variantMap.size
    }
  },
  render: (args) => (
    <Flex
      gap="20"
      // eslint-disable-next-line @pandacss/no-dynamic-styling
      direction={(args.orientation ?? 'horizontal') === 'horizontal' ? 'column' : 'row'}
      minHeight="56"
      maxWidth="96"
      alignItems="center"
    >
      <Text>Lorem Ipsum something whatever</Text>
      <Separator {...args} />
      <Text>Lorem Ipsum something whatever</Text>
      <Separator {...args} />
      <Text>Lorem Ipsum something whatever</Text>
    </Flex>
  )
}
