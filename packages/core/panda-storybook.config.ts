import { defineConfig } from '@pandacss/dev'
import { createNimbusPreset, NimbusColors } from '@nimbus-ui/preset'
import { patterns } from './panda-storybook'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createNimbusPreset({
      respectMotionPreference: true,
      palettes: {
        primary: NimbusColors.Primary.Blue,
        base: NimbusColors.Base.Gray
        // other: { warning: 'yellow' }
      },
      otherThemes: {
        pink: {
          primary: '#F38375',
          base: '#2E5CA9',
          error: NimbusColors.Error.Pink
        },
        dark: {
          primary: NimbusColors.Primary.Dark,
          base: NimbusColors.Base.Gray,
          error: NimbusColors.Error.Rose
        }
      }
    })
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './packages/core/src/**/*.{js,jsx,ts,tsx}',
    './packages/preset/src/**/*.{js,jsx,ts,tsx}'
  ],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  // Storybook specific patterns
  patterns: {
    extend: patterns
  },

  staticCss: { themes: ['pink', 'dark'], recipes: '*' },

  // no random css properties
  strictPropertyValues: false,

  // strict tokens
  strictTokens: true,

  clean: true,

  jsxFramework: 'react',

  importMap: '@nimbus-ui/styled-system',
  // The output directory for your css system
  outdir: '../styled-system'
})
