import type { Meta, StoryObj } from '@storybook/react'
import { Box, Flex, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { Loader } from './Loader'
import { loader } from '@nimbus-ui/styled-system/recipes'
import { Fragment } from 'react'

const meta = {
  title: 'Feedback/Loader',
  component: Loader,
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
    variant: {
      control: 'select',
      options: loader.variantMap.variant
    },
    size: {
      control: 'select',
      options: loader.variantMap.size
    }
  },
  args: {
    color: 'primary'
  },
  render: (args) => <Loader {...args} />
}

export const Variants = () => {
  return (
    <Flex gap="20">
      <Loader />
      <Loader variant="bars" />
      <Loader variant="dots" />
    </Flex>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={6} gap="20">
      {loader.variantMap.variant.map((variant) =>
        loader.variantMap.size.map((size) => (
          <Loader key={`${variant}_${size}`} variant={variant} size={size} />
        ))
      )}
    </SBGrid>
  )
}

export const Colors = () => {
  return (
    <SBGrid columns={3}>
      {loader.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <Loader variant={variant} color="primary" />
          <Loader variant={variant} color="base" />
          <Loader variant={variant} color="error" />
        </Fragment>
      ))}
    </SBGrid>
  )
}
