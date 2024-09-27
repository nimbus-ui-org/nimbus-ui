import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Box, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { FaEnvelope } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { button, loader } from '@nimbus-ui/styled-system/recipes'
import { Fragment } from 'react'

const meta = {
  title: 'Buttons/Button',
  component: Button,
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
    },
    loaderProps: {
      control: 'select',
      options: loader.variantMap.variant,
      mapping: {
        spinner: { variant: 'spinner' },
        dots: { variant: 'dots' },
        bars: { variant: 'bars' }
      }
    },
    startSection: {
      control: 'radio',
      options: ['Icon', 'Empty'],
      mapping: {
        Icon: <FaEnvelope />,
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
    children: 'Contact Us',
    isLoading: false,
    isDisabled: false,
    customLoader: ''
  },
  render: (args) => <Button aria-label="Nimbus Button" {...args} />
}

export const Variants = () => {
  return (
    <SBGrid gap="20" columns={4}>
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} variant={variant}>
          Button
        </Button>
      ))}
    </SBGrid>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) =>
        button.variantMap.size.map((size) => (
          <Button key={`${variant}_${size}`} variant={variant} size={size}>
            Button
          </Button>
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
            <Button
              startSection={<FaEnvelope />}
              variant={variant}
              colorPalette="primary"
            >
              Button
            </Button>
          </GridItem>
          <GridItem>
            <Button startSection={<FaEnvelope />} variant={variant} colorPalette="base">
              Button
            </Button>
          </GridItem>
          <GridItem>
            <Button startSection={<FaEnvelope />} variant={variant} colorPalette="error">
              Button
            </Button>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Icons = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.size.map((size) => (
        <Button key={`${size}_1`} startSection={<FaEnvelope />} size={size}>
          Button
        </Button>
      ))}
      {button.variantMap.size.map((size) => (
        <Button key={`${size}_2`} endSection={<FaArrowRightLong />} size={size}>
          Button
        </Button>
      ))}
    </SBGrid>
  )
}

export const Loading = () => {
  return (
    <SBGrid columns={5}>
      {loader.variantMap.variant.map((loaderVariant) =>
        button.variantMap.size.map((buttonSize) => (
          <Button
            key={`${buttonSize}_${loaderVariant}`}
            size={buttonSize}
            isLoading
            loaderProps={{ variant: loaderVariant }}
            aria-label="Loading Button"
          >
            Button
          </Button>
        ))
      )}
    </SBGrid>
  )
}

export const Disabled = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) => (
        <GridItem key={variant}>
          <Button variant={variant} isDisabled aria-label="Disabled Button">
            Button
          </Button>
        </GridItem>
      ))}
    </SBGrid>
  )
}
