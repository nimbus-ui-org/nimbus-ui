import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  clean: true,

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: '../styled-system'
})
