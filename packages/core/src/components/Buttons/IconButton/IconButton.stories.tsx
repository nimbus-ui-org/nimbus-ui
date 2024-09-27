import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { button } from '@nimbus-ui/styled-system/recipes'
import { IconButton } from './IconButton'
import { FaBan, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { TbAdjustments } from 'react-icons/tb'
import { Fragment } from 'react'

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
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
      options: button.variantMap.variant
    },
    size: {
      control: 'select',
      options: button.variantMap.size
    },
    colorPalette: {
      control: 'select',
      options: ['primary', 'base', 'error']
    }
  },
  render: (args) => (
    <Flex gap="10">
      <IconButton {...args} aria-label="Icon Button">
        <FaPhoneAlt />
      </IconButton>
      <IconButton {...args} aria-label="Icon Button">
        <FaEnvelope />
      </IconButton>
      <IconButton {...args} aria-label="Icon Button">
        <TbAdjustments />
      </IconButton>
      <IconButton {...args} aria-label="Icon Button">
        <FaBan />
      </IconButton>
    </Flex>
  )
}

export const Variants = () => {
  return (
    <SBGrid columns={4}>
      {button.variantMap.variant.map((variant) => (
        <IconButton key={variant} variant={variant} aria-label="Icon Button">
          <FaEnvelope />
        </IconButton>
      ))}
    </SBGrid>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) =>
        button.variantMap.size.map((size) => (
          <IconButton
            key={`${variant}_${size}`}
            variant={variant}
            size={size}
            aria-label="Icon Button"
          >
            <FaEnvelope />
          </IconButton>
        ))
      )}
    </SBGrid>
  )
}

export const Colors = () => {
  return (
    <SBGrid columns={3}>
      {button.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <GridItem>
            <IconButton variant={variant} colorPalette="primary" aria-label="Icon Button">
              <FaEnvelope />
            </IconButton>
          </GridItem>
          <GridItem>
            <IconButton variant={variant} colorPalette="base" aria-label="Icon Button">
              <FaEnvelope />
            </IconButton>
          </GridItem>
          <GridItem>
            <IconButton variant={variant} colorPalette="error" aria-label="Icon Button">
              <FaEnvelope />
            </IconButton>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Disabled = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) => (
        <GridItem key={variant}>
          <IconButton variant={variant} isDisabled aria-label="Disabled Icon Button">
            <FaEnvelope />
          </IconButton>
        </GridItem>
      ))}
    </SBGrid>
  )
}
