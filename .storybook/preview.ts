import type { Preview } from '@storybook/react'
import './layers.css'
import { themes } from '@storybook/theming'
// @ts-expect-error
import logoLight from './logo-light.svg'
// @ts-expect-error
import logoDark from './logo-dark.svg'

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
