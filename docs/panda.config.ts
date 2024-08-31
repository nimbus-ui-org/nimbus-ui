import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nimbus-ui/core/panda-info/panda.buildinfo.json'
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },
  jsxFramework: 'react',

  // Map package imports to local styled-sytem imports
  importMap: '@nimbus-ui/styled-system',
  // The output directory for your css system
  outdir: 'styled-system'
})
