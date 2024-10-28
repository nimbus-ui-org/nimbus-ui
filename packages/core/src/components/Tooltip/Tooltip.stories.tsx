import type { Meta, StoryObj } from '@storybook/react'
import { Box, Center } from '@nimbus-ui/styled-system/jsx'
import { TooltipTrigger } from 'react-aria-components'
import { Button } from '@components/Button'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <Box h="[150lvh]">
        <Center h="lvh">
          <Story />
        </Center>
      </Box>
    )
  ]
} satisfies Meta

export default meta

type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Playground: Story = {
  args: {
    withArrow: true,
    arrowSize: 8,
    placement: 'top'
  },
  render: (args) => (
    <TooltipTrigger delay={500}>
      <Button>Popover Trigger</Button>
      <Tooltip {...args}>Tooltip Content</Tooltip>
    </TooltipTrigger>
  )
}
