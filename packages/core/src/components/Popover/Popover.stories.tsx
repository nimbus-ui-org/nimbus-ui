import type { Meta, StoryObj } from '@storybook/react'
import { Box, Center } from '@nimbus-ui/styled-system/jsx'
import { Popover } from './Popover'
import { DialogTrigger } from 'react-aria-components'
import { Button } from '@components/Button'
import { dialog, popover } from '@nimbus-ui/styled-system/recipes'

const meta = {
  title: 'Overlays/Popover',
  component: Popover,
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
  argTypes: {
    variant: {
      control: 'radio',
      options: popover.variantMap.variant
    },
    size: {
      control: 'select',
      options: dialog.variantMap.size
    }
  },
  args: {
    withArrow: true,
    arrowSize: 12,
    placement: 'bottom',
    isNonModal: true
  },
  render: (args) => (
    <DialogTrigger>
      <Button>Popover Trigger</Button>
      <Popover {...args}>Hello there idiotlkj lksjf laskjdf ;laskdjf</Popover>
    </DialogTrigger>
  )
}
