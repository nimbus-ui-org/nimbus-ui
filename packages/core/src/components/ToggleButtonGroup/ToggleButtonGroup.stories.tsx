import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex } from '@nimbus-ui/styled-system/jsx'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { ToggleButtonGroup } from './ToggleButtonGroup'
import { useState } from 'react'
import { ToggleButton } from '@components/ToggleButton'
import { ToggleIconButton } from '@components/ToggleIconButton'
import { FaAlignRight } from 'react-icons/fa'

const meta = {
  title: 'Buttons/ToggleButtonGroup',
  component: ToggleButtonGroup,
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
  render: ({ ...args }) => {
    const [value, setValue] = useState<string | null | undefined>(null)

    const onChange = (isSelected: boolean, newValue?: string | null) => {
      if (isSelected) {
        setValue(newValue)
      } else setValue(null)
    }

    return (
      <Flex gap="10">
        <ToggleButtonGroup selectedValue={value} onChange={onChange} {...args}>
          <ToggleButton value="left" variant="ghost">
            Left
          </ToggleButton>
          <ToggleButton value="center" variant="ghost">
            Right
          </ToggleButton>
          <ToggleIconButton value="right" variant="ghost" aria-label="Icon Button">
            <FaAlignRight />
          </ToggleIconButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup selectedValue={value} onChange={onChange} {...args}>
          <ToggleButton value="left" variant="outline">
            Left
          </ToggleButton>
          <ToggleButton value="center" variant="outline">
            Right
          </ToggleButton>
          <ToggleIconButton value="right" variant="outline" aria-label="Icon Button">
            <FaAlignRight />
          </ToggleIconButton>
        </ToggleButtonGroup>
      </Flex>
    )
  }
}
