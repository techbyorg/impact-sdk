module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  ignorePatterns: ['cjs'],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
  }
}
