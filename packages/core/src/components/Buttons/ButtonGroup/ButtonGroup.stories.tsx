import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex } from '@nimbus-ui/styled-system/jsx'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button'

const meta = {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  decorators: [
    (Story) => (
      <Box p="10">
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
      options: buttonGroup.variantMap.orientation
    }
  },
  render: (args) => (
    <Flex gap="10">
      <ButtonGroup {...args}>
        <Button variant="ghost">Save</Button>
        <Button variant="ghost">Discard</Button>
        <Button variant="ghost">Cancel</Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button variant="outline">Save</Button>
        <Button variant="outline">Discard</Button>
        <Button variant="outline">Cancel</Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button variant="solid">Save</Button>
        <Button variant="solid">Discard</Button>
        <Button variant="solid">Cancel</Button>
      </ButtonGroup>
    </Flex>
  )
}
