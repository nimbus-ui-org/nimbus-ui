import { defineConfig } from '@pandacss/dev'
import { createNimbusPreset, NimbusColors } from '@nimbus-ui/preset'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createNimbusPreset({
      respectMotionPreference: true,
      palettes: {
        primary: NimbusColors.Primary.Blue,
        base: NimbusColors.Base.Slate
        // other: { warning: 'yellow' }
      }
    })
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './packages/core/src/**/*.{js,jsx,ts,tsx}',
    './packages/preset/src/**/*.{js,jsx,ts,tsx}'
  ],

  // Useful for theme customization
  theme: {
    extend: {}
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
