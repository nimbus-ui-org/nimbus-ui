import type { Meta, StoryObj } from '@storybook/react'
import { Box, Center } from '@nimbus-ui/styled-system/jsx'
import { Popover } from './Popover'
import { DialogTrigger } from 'react-aria-components'
import { Button } from '@components/Button'
import { dialog, popover } from '@nimbus-ui/styled-system/recipes'
import { DialogContent, DialogFooter, DialogHeader } from '@components/Dialog'
import { css } from '@nimbus-ui/styled-system/css'
import { FaExclamationTriangle } from 'react-icons/fa'

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
      options: popover.variantMap.size
    },
    scrollType: {
      control: 'radio',
      options: dialog.variantMap.scrollType
    }
  },
  args: {
    withArrow: true,
    arrowSize: 12,
    placement: 'bottom',
    size: 'xs',
    isNonModal: true
  },
  render: (args) => (
    <DialogTrigger>
      <Button>Popover Trigger</Button>
      <Popover dialogProps={{ role: 'alertdialog' }} {...args}>
        {({ close }) => (
          <>
            <DialogHeader
              icon={<FaExclamationTriangle className={css({ color: 'error' })} />}
            >
              Dialog Title
            </DialogHeader>
            <DialogContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
              risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus,
              sed porttitor quam.
            </DialogContent>
            <DialogFooter>
              <Button onPress={close} size="sm" variant="ghost" colorPalette="base">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </DialogFooter>
          </>
        )}
      </Popover>
    </DialogTrigger>
  )
}
