import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

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

  clean: true,

  jsxFramework: 'react',

  importMap: '@nimbus-ui/styled-system',
  // The output directory for your css system
  outdir: '../styled-system'
})