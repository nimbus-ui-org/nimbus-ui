module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@pandacss/dev/postcss')({ configPath: './packages/core/panda.config.ts' })
  ]
}
