import type { Meta, StoryObj } from '@storybook/react'
import { Box, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa'
import { toggleButton } from '@nimbus-ui/styled-system/recipes'
import { ToggleIconButton } from './ToggleIconButton'
import { fn } from '@storybook/test'
import { ButtonGroup } from '../ButtonGroup'
import { Fragment, useState } from 'react'
import { ToggleButtonProvider } from '../ToggleButton'

const meta = {
  title: 'Buttons/ToggleIconButton',
  component: ToggleIconButton,
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
    variant: {
      control: 'select',
      options: toggleButton.variantMap.variant
    },
    size: {
      control: 'select',
      options: toggleButton.variantMap.size
    },
    colorPalette: {
      control: 'select',
      options: ['primary', 'base', 'error']
    }
  },
  args: {
    children: <FaAlignLeft />,
    isDisabled: false,
    value: 'left',
    onChange: fn()
  },
  render: (args) => <ToggleIconButton aria-label="Nimbus Button" {...args} />
}

export const Variants = () => {
  return (
    <SBGrid gap="20" columns={4}>
      {toggleButton.variantMap.variant.map((variant) => (
        <ToggleIconButton key={variant} variant={variant}>
          <FaAlignLeft />
        </ToggleIconButton>
      ))}
    </SBGrid>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={5}>
      {toggleButton.variantMap.variant.map((variant) =>
        toggleButton.variantMap.size.map((size) => (
          <ToggleIconButton key={`${variant}_${size}`} variant={variant} size={size}>
            <FaAlignLeft />
          </ToggleIconButton>
        ))
      )}
    </SBGrid>
  )
}

export const Colors = () => {
  return (
    <SBGrid columns={3}>
      {toggleButton.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <GridItem>
            <ToggleIconButton isSelected variant={variant} colorPalette="primary">
              <FaAlignLeft />
            </ToggleIconButton>
          </GridItem>
          <GridItem>
            <ToggleIconButton isSelected variant={variant} colorPalette="base">
              <FaAlignLeft />
            </ToggleIconButton>
          </GridItem>
          <GridItem>
            <ToggleIconButton isSelected variant={variant} colorPalette="error">
              <FaAlignLeft />
            </ToggleIconButton>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Disabled = () => {
  return (
    <SBGrid columns={2}>
      {toggleButton.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <GridItem>
            <ToggleIconButton variant={variant} isDisabled aria-label="Unselected Button">
              <FaAlignLeft />
            </ToggleIconButton>
          </GridItem>
          <GridItem key={variant}>
            <ToggleIconButton
              isSelected
              variant={variant}
              isDisabled
              aria-label="Selected Button"
            >
              <FaAlignLeft />
            </ToggleIconButton>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Provider = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <ToggleButtonProvider
      selectedValue={value}
      onChange={(isSelected, value) => {
        if (isSelected) {
          setValue(value as string)
        } else setValue(null)
      }}
      variant="outline"
    >
      <ButtonGroup>
        <ToggleIconButton value="left">
          <FaAlignLeft />
        </ToggleIconButton>
        <ToggleIconButton value="center">
          <FaAlignCenter />
        </ToggleIconButton>
        <ToggleIconButton value="right">
          <FaAlignRight />
        </ToggleIconButton>
      </ButtonGroup>
    </ToggleButtonProvider>
  )
}
