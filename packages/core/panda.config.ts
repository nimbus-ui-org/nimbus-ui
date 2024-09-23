import { defineConfig } from '@pandacss/dev'
import nimbusPreset from '@nimbus-ui/preset'

// This is the panda config used to build the styled system package

export default defineConfig({
  presets: ['@pandacss/preset-base', nimbusPreset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  exclude: ['./src/**/*.stories.tsx'],

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
