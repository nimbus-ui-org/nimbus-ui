import { defineConfig, type Options } from 'tsup'

const commonOptions: Options = {
  entry: ['src/index.ts', 'src/components/*/index.ts', 'src/preset/index.ts'],
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
