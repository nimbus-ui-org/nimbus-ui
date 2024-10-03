import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@nimbus-ui/styled-system/jsx'
import { Locale } from './Locale'
import { Button } from '@components/Button'

const meta = {
  title: 'Localization/Locale',
  component: Locale,
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ]
} satisfies Meta

export default meta

type Story = StoryObj<Omit<typeof meta, 'decorators'>>

const locales = [
  'ar-AE',
  'bg-BG',
  'cs-CZ',
  'da-DK',
  'de-DE',
  'el-GR',
  'en-US',
  'es-ES',
  'et-EE',
  'fi-FI',
  'fr-FR',
  'he-IL',
  'hu-HU',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'lt-LT',
  'lv-LV',
  'nb-NO',
  'nl-NL',
  'pl-PL',
  'pt-BR',
  'pt-PT',
  'ro-RO',
  'ru-RU',
  'sk-SK',
  'sl-SI',
  'sr-SP',
  'sv-SE',
  'tr-TR',
  'uk-UA',
  'zh-CN',
  'zh-TW'
]

export const Playground: Story = {
  argTypes: {
    locale: {
      control: 'select',
      options: locales
    }
  },
  args: { locale: 'en-US' },
  render: (args) => {
    return (
      <>
        <Locale {...args}>
          <Button>Button</Button>
        </Locale>
        <Locale locale="ar-AE">
          <Button>زر</Button>
        </Locale>
      </>
    )
  }
}
