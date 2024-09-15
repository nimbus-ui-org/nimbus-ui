import type { Preview } from '@storybook/react'
import './layers.css'
import { themes } from '@storybook/theming'
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher'
// @ts-expect-error
import logoLight from './logo-light.svg'
// @ts-expect-error
import logoDark from './logo-dark.svg'

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
        icon: 'paintbrush'
      }
    } satisfies ThemeConfig
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
        color: /(background|color)$/i,
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
  }
}

export default preview
