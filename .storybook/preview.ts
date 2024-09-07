import type { Preview } from '@storybook/react'
import './layers.css'
import { themes } from '@storybook/theming'
// @ts-expect-error
import logoLight from './logo-light.svg'
// @ts-expect-error
import logoDark from './logo-dark.svg'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    darkMode: {
      light: { ...themes.normal, brandImage: logoLight },
      dark: { ...themes.dark, brandImage: logoDark }
    }
  }
}

export default preview
