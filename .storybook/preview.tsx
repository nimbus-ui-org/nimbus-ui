import React from 'react'
import type { Preview } from '@storybook/react'
import './layers.css'
import { themes } from '@storybook/theming'
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher'
// @ts-expect-error
import logoLight from './logo-light.svg'
// @ts-expect-error
import logoDark from './logo-dark.svg'

import { NimbusProvider } from '../packages/core/src'

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

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'Blue / Gray', dataTheme: 'blue', color: '#3B82F6' },
        { name: 'Pink / Blue', dataTheme: 'pink', color: '#F38375' },
        { name: 'Dark / Gray', dataTheme: 'dark', color: '#000' }
      ],
      dataAttribute: 'data-panda-theme',
      clearable: true,
      toolbar: {
        title: 'Change data-theme attribute',
        icon: 'PaintBrushIcon'
      }
    } satisfies ThemeConfig
  },
  locale: {
    toolbar: {
      icon: 'globe',
      items: locales.map((locale) => ({
        value: locale,
        title: new Intl.DisplayNames(undefined, { type: 'language' }).of(locale)
      }))
    }
  }
}

const commonThemeProps = {
  brandTitle: 'Nimbus UI',
  brandUrl: 'https://storybook.js.org'
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i
      }
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      light: { ...themes.normal, ...commonThemeProps, brandImage: logoLight },
      dark: { ...themes.dark, ...commonThemeProps, brandImage: logoDark }
    }
  },
  decorators: [
    (Story, { globals: { locale } }) => (
      <NimbusProvider locale={locale}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </NimbusProvider>
    )
  ]
}

export default preview
