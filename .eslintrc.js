module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    radix: 'off',
    'no-restricted-globals': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    workbox: true,
  },
};
