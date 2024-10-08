import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts']
  }
})
