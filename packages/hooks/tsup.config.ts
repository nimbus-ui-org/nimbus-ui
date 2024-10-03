import { defineConfig, type Options } from 'tsup'

const commonOptions: Options = {
  entry: ['src/index.ts', '!src/**/__tests__'],
  sourcemap: true, // generate .map files
  treeshake: true, // use rollup treeshake instead of esbuild. but cannot use with banner property
  clean: true,
  /* minify set to true removes pure annotations so use these options instead */
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: false // to preserve /* @__PURE__ */ annotations,
}

export default defineConfig([
  {
    format: ['esm'], // Build ESmodules
    outDir: 'esm',
    ...commonOptions
  },
  {
    format: ['cjs'], // Build for commonJS
    outDir: 'cjs',
    ...commonOptions
  }
])
