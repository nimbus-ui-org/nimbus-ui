import type { Meta, StoryObj } from '@storybook/react'
import { Box, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { paper } from '@nimbus-ui/styled-system/recipes'
import { Paper } from './Paper'

const meta = {
  title: 'Surfaces/Paper',
  component: Paper,
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
      options: paper.variantMap.variant
    }
  },
  render: (args) => <Paper css={{ height: '72', width: '72' }} {...args} />
}

export const Variants = () => {
  return (
    <SBGrid gap="20" columns={3}>
      {paper.variantMap.variant.map((variant) => (
        <Paper key={variant} variant={variant} css={{ height: '72', width: '72' }} />
      ))}
    </SBGrid>
  )
}
