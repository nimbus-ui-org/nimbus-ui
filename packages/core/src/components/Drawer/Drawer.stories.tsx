import type { Meta, StoryObj } from '@storybook/react'
import { Box, Center } from '@nimbus-ui/styled-system/jsx'
import { DialogTrigger } from 'react-aria-components'
import { Button } from '@components/Button'
import { drawer } from '@nimbus-ui/styled-system/recipes'
import { DialogContent, DialogFooter, DialogHeader } from '@components/Dialog'
import { css } from '@nimbus-ui/styled-system/css'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Drawer } from './Drawer'

const meta = {
  title: 'Overlays/Drawer',
  component: Drawer,
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
    size: {
      control: 'select',
      options: drawer.variantMap.size
    },
    scrollType: {
      control: 'radio',
      options: drawer.variantMap.scrollType
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end', 'left', 'right']
    }
  },
  args: {
    size: 'xs',
    placement: 'start',
    containerPadding: 0
  },
  render: (args) => (
    <DialogTrigger>
      <Button>Drawer Trigger</Button>
      <Drawer dialogProps={{ role: 'alertdialog' }} {...args}>
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
      </Drawer>
    </DialogTrigger>
  )
}
