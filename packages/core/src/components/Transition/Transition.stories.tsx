import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { transition } from '@nimbus-ui/styled-system/recipes'
import { Transition } from './Transition'
import { fn } from '@storybook/test'

const meta = {
  title: 'Transitions/Transition',
  component: Transition,
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
      options: transition.variantMap.variant
    }
  },
  args: {
    in: true,
    keepMounted: true,
    duration: 300,
    exitDuration: 300,
    enterDelay: 0,
    exitDelay: 0,
    onEnter: fn(() => console.log('entering begins')),
    onEnterComplete: fn(() => console.log('entering complete')),
    onExit: fn(() => console.log('exiting begins')),
    onExitComplete: fn(() => console.log('exiting complete'))
  },
  render: (args) => (
    <Transition css={{ height: '72', width: '72', background: 'primary' }} {...args} />
  )
}
