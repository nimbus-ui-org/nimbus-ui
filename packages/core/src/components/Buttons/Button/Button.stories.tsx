import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { Box, Flex, SBGrid } from '@nimbus-ui/styled-system/jsx'
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
  ],
  args: { onPress: fn(() => console.log('pressed')) }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Primary: Story = {
  args: {
    children: 'Contact Us',
    variant: 'solid',
    size: 'md',
    colorPalette: 'primary',
    startSection: <FaEnvelope />,
    endSection: <FaArrowRightLong />,
    isLoading: false,
    isDisabled: false,
    customLoader: 'Loading...',
    loaderProps: { variant: 'spinner' },
    'aria-label': 'Nimbus Button'
  }
}

export const Basic = () => {
  return <Button>Button</Button>
}

export const Variants = () => {
  return (
    <Flex gap="20">
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} variant={variant}>
          Button
        </Button>
      ))}
    </Flex>
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
          <Button startSection={<FaEnvelope />} variant={variant} colorPalette="primary">
            Button
          </Button>
          <Button startSection={<FaEnvelope />} variant={variant} colorPalette="base">
            Button
          </Button>
          <Button startSection={<FaEnvelope />} variant={variant} colorPalette="error">
            Button
          </Button>
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
