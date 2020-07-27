module.exports = { 
  presets: [
    ['@babel/preset-env', { targets: ['node 6'] }]
  ],
  plugins: [['@babel/plugin-transform-runtime', { helpers: false }]],
  env: { 
    cjs: { 
      presets: [
        ['@babel/preset-env', { modules: 'commonjs' }]
      ]
    },
    mjs: {
      presets: [
        ['@babel/preset-env', { modules: false }]
      ]
    }
  }
}