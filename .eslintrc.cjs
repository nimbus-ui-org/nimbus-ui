module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@pandacss/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: 'latest',
    project: true,
    tsconfigRootDir: __dirname
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
  rules: {
    '@pandacss/file-not-included': 'off',
    '@pandacss/no-hardcoded-color': 'off',
    'prettier/prettier': [
      1,
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 90,
        endOfLine: 'auto'
      }
    ]
  }
}
