import { defineConfig, type Options } from 'tsup'

const bundlerOptions: Options = {
  sourcemap: true, // generate .map files
  clean: true,
  /* minify set to true removes pure annotations so use these options instead */
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: false // to preserve /* @__PURE__ */ annotations,
}

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm'], // Build ESmodules
    outDir: 'esm',
    ...bundlerOptions
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs'], // Build for commonJS
    outDir: 'cjs',
    ...bundlerOptions
  }
])
