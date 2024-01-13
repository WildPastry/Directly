module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@wildpastry/eslint-config',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/models'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
