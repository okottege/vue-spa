const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.base.config');

const config = Object.assign({}, base, {
  plugins: base.plugins || [],
});

/* eslint-disable no-param-reassign  */
config.module.rules
  .filter(r => r.loader === 'vue-loader')
  .forEach((r) => { r.options.extractCSS = true; });

config.plugins.push(new ExtractTextPlugin('assets/styles.css'));

module.exports = config;
