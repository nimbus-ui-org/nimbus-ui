import type { Meta, StoryObj } from '@storybook/react'
import { Box, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { FaCheck } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toggleButton } from '@nimbus-ui/styled-system/recipes'
import { ToggleButton } from './ToggleButton'
import { fn } from '@storybook/test'
import { ToggleButtonGroup } from './ToggleButtonGroup'
import { Fragment, useState } from 'react'

const meta = {
  title: 'Buttons/ToggleButton',
  component: ToggleButton,
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
    },
    startSection: {
      control: 'radio',
      options: ['Icon', 'Empty'],
      mapping: {
        Icon: <FaCheck />,
        Empty: undefined
      }
    },
    endSection: {
      control: 'radio',
      options: ['Icon', 'Empty'],
      mapping: {
        Icon: <FaArrowRightLong />,
        Empty: undefined
      }
    }
  },
  args: {
    children: 'Matte Black',
    startSection: ({ isSelected }) => isSelected && <FaCheck />,
    isDisabled: false,
    value: 'black',
    onChange: fn()
  },
  render: (args) => <ToggleButton aria-label="Nimbus Button" {...args} />
}

export const Variants = () => {
  return (
    <SBGrid gap="20" columns={4}>
      {toggleButton.variantMap.variant.map((variant) => (
        <ToggleButton key={variant} variant={variant}>
          Button
        </ToggleButton>
      ))}
    </SBGrid>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={5}>
      {toggleButton.variantMap.variant.map((variant) =>
        toggleButton.variantMap.size.map((size) => (
          <ToggleButton key={`${variant}_${size}`} variant={variant} size={size}>
            Button
          </ToggleButton>
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
            <ToggleButton
              isSelected
              startSection={<FaCheck />}
              variant={variant}
              colorPalette="primary"
            >
              Button
            </ToggleButton>
          </GridItem>
          <GridItem>
            <ToggleButton
              isSelected
              startSection={<FaCheck />}
              variant={variant}
              colorPalette="base"
            >
              Button
            </ToggleButton>
          </GridItem>
          <GridItem>
            <ToggleButton
              isSelected
              startSection={<FaCheck />}
              variant={variant}
              colorPalette="error"
            >
              Button
            </ToggleButton>
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
            <ToggleButton variant={variant} isDisabled aria-label="Unselected Button">
              Button
            </ToggleButton>
          </GridItem>
          <GridItem key={variant}>
            <ToggleButton
              isSelected
              variant={variant}
              isDisabled
              aria-label="Selected Button"
            >
              Button
            </ToggleButton>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Provider = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <ToggleButtonGroup
      isAttached
      selectedValue={value}
      onChange={(isSelected, value) => {
        if (isSelected) {
          setValue(value as string)
        } else setValue(null)
      }}
    >
      <ToggleButton value="pistachio">Pistachio</ToggleButton>
      <ToggleButton value="black">Matte Black</ToggleButton>
      <ToggleButton value="blue">Midnight Blue</ToggleButton>
    </ToggleButtonGroup>
  )
}
