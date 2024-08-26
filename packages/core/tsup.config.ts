import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

const bundlerOptions: Options = {
  banner: { js: '"use client";' }, // add this on top of every UI component since they are customizable with props
  sourcemap: true, // generate .map files
  clean: true,
  external: ['@nimbus-ui/styled-system'],
  /* minify set to true removes pure annotations so use these options instead */
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: false // to preserve /* @__PURE__ */ annotations,
}

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/components/*/index.ts'],
    format: ['esm'], // Build ESmodules
    outDir: 'esm',
    ...bundlerOptions
  },
  {
    entry: ['src/index.ts', 'src/components/*/index.ts'],
    format: ['cjs'], // Build for commonJS
    outDir: 'cjs',
    ...bundlerOptions
  },
  {
    entry: ['src/index.ts', 'src/components/*/index.ts'],
    format: ['cjs', 'esm'], // Build for commonJS and ESmodules
    dts: {
      only: true
    }, // Generate declaration files only (.d.ts)
    external: ['@nimbus-ui/styled-system'],
    tsconfig: 'tsconfig.build.json',
    outDir: 'lib'
  }
])
