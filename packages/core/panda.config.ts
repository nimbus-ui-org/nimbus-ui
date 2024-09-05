import { defineConfig } from '@pandacss/dev'
import nimbusPreset from '@preset'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', nimbusPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './packages/core/src/**/*.{js,jsx,ts,tsx}'],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          eCup: { value: '5rem' }
        }
      }
    }
  },

  // no random css properties
  strictPropertyValues: true,

  // strict tokens
  strictTokens: true,

  clean: true,

  jsxFramework: 'react',

  dependencies: ['./packages/core/panda.config.ts'],

  importMap: '@nimbus-ui/styled-system',
  // The output directory for your css system
  outdir: '../styled-system'
})
