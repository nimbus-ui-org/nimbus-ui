import type { Meta } from '@storybook/react'
import { Box, Flex, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
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
          <GridItem key={`${variant}_${size}`}>
            <Loader variant={variant} size={size} />
          </GridItem>
        ))
      )}
    </SBGrid>
  )
}

export const Colors = () => {
  return (
    <SBGrid columns={3} gap="20">
      {loader.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <GridItem>
            <Loader variant={variant} colorPalette="primary" />
          </GridItem>
          <GridItem>
            <Loader variant={variant} colorPalette="base" />
          </GridItem>
          <GridItem>
            <Loader variant={variant} colorPalette="error" />
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}
