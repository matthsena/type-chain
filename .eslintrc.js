module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'array-callback-return': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off'
  },
};
