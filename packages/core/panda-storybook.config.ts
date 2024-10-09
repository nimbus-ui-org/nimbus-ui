import { defineConfig } from '@pandacss/dev'
import { createNimbusPreset, NimbusColors } from '@nimbus-ui/preset'
import { patterns } from './panda-storybook'

// only for storybook

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createNimbusPreset({
      respectMotionPreference: true,
      palettes: {
        primary: NimbusColors.Primary.Blue,
        base: NimbusColors.Base.Gray,
        other: { warning: NimbusColors.Primary.Amber }
      },
      otherThemes: {
        pink: {
          primary: '#A35B52',
          base: '#2A5093'
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

  staticCss: {
    themes: ['pink', 'dark'],
    recipes: '*',
    css: [
      {
        properties: {
          backgroundColor: ['*'],
          borderColor: ['*'],
          color: ['*'],
          colorPalette: ['*'],
          fontWeight: ['*'],
          textStyle: ['*']
        }
      }
    ]
  },

  // no random css properties
  strictPropertyValues: true,

  // strict tokens
  strictTokens: true,

  clean: true,

  jsxFramework: 'react',

  importMap: '@nimbus-ui/styled-system',
  // The output directory for your css system
  outdir: '../styled-system'
})
