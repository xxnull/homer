require('@babel/register')({
    extends: './babel.config.js',
    ignore: [/node_modules/],
    presets: ['@babel/preset-env'],
  })

  module.exports = require('./app.js')