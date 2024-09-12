import type { StorybookConfig } from '@storybook/react-vite'

import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../packages/core/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('storybook-addon-data-theme-switcher')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  typescript: {
    reactDocgen: false
  },
  // add tsconfig path aliases
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()]
    })
  },
  // There's a bug where the logo size is inconsistent between light and dark mode (https://github.com/storybookjs/storybook/issues/28192).
  // This fixes it for now.
  managerHead: () => `
    <style>
      .css-1rb1jn6 {
        max-width: 100% !important;
      }
    </style>
  `
}
export default config
