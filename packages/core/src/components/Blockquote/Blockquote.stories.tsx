import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Blockquote } from './Blockquote'
import { css } from '@nimbus-ui/styled-system/css'

const meta = {
  title: 'Typography/Blockquote',
  component: Blockquote,
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
  args: {
    fontSize: 'md',
    colorPalette: 'primary'
  },
  render: ({ ...args }) => (
    <Blockquote cite="https://github.com/mhmdjaw" width="96" {...args}>
      If you’re always full of wonder whether things work out for you or not - you might
      be a programmer.
      <br />
      <br />
      <strong className={css({ textStyle: 'quote' })}>― Testy McTesterson</strong>
    </Blockquote>
  )
}
