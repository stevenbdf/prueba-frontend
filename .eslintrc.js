// eslint-disable-next-line rule
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential'
  ],
  rules: {
    'linebreak-style': 0,
    'no-console': /*process.env.NODE_ENV === 'production' ? 'error' :*/ 'off',
    'no-debugger': /*process.env.NODE_ENV === 'production' ? 'error' :*/ 'off',
    'import/no-unresolved': 'off',
    'eslint-disable-next-line': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'config',
        'state',
      ],
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
