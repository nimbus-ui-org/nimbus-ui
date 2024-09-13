import { defineConfig } from '@pandacss/dev'
import { createNimbusPreset } from '@nimbus-ui/preset'

export default defineConfig({
  presets: [
    '@pandacss/preset-base',
    createNimbusPreset({
      respectMotionPreference: true,
      colors: {
        // primary
        pink: [
          '#fef4f3',
          '#fde4e2',
          '#fbd4d0',
          '#fac4be',
          '#f9b4ac',
          '#f7a49b',
          '#f69489',
          '#d17e74',
          '#ac6860',
          '#87514b',
          '#87514b'
        ],
        // secondary
        titanium: [
          '#edf5f8',
          '#d3e6ee',
          '#b8d7e3',
          '#9ec8d9',
          '#83b9ce',
          '#69aac4',
          '#4e9bb9',
          '#42849d',
          '#376d82',
          '#2b5566',
          '#2b5566'
        ]
      },
      palettes: {
        base: 'titanium',
        other: { warning: 'yellow' }
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
