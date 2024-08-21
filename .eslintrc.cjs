/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'prettier/prettier': [
      1,
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        endOfLine: 'auto'
      }
    ]
  }
}
