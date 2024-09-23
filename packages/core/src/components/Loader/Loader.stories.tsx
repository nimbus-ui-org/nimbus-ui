import type { Meta } from '@storybook/react'
import { Box, Flex, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { Loader } from './Loader'
import { loader } from '@nimbus-ui/styled-system/recipes'
import { Fragment } from 'react'

const meta = {
  title: 'Feedback/Loader',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ]
} satisfies Meta

export default meta

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
    <SBGrid columns={5} gap="20">
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
