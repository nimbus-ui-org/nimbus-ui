import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex } from '@nimbus-ui/styled-system/jsx'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { ButtonGroup } from './ButtonGroup'
import { IconButton } from '@components/IconButton'
import { FaSave } from 'react-icons/fa'
import { Button } from '@components/Button'

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
  args: { isAttached: true },
  render: (args) => {
    return (
      <Flex gap="10">
        <ButtonGroup {...args}>
          <Button variant="ghost">Save</Button>
          <Button variant="ghost">Discard</Button>
          <IconButton variant="ghost" aria-label="Icon Button">
            <FaSave />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup {...args}>
          <Button variant="outline">Save</Button>
          <Button variant="outline">Discard</Button>
          <IconButton variant="outline" aria-label="Icon Button">
            <FaSave />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup {...args}>
          <Button variant="solid">Save</Button>
          <Button variant="solid">Discard</Button>
          <IconButton variant="solid" aria-label="Icon Button">
            <FaSave />
          </IconButton>
        </ButtonGroup>
      </Flex>
    )
  }
}
