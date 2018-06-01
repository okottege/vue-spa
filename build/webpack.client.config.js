const base = require('./webpack.base.config');

const config = Object.assign({}, base, {
  plugins: base.plugins || [],
});

/* eslint-disable no-param-reassign  */
// config.module.rules
//   .filter(r => r.loader === 'vue-loader')
//   .forEach((r) => { r.options.extractCSS = true; });

// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push(new webpack.optimize.m({
//     compress: {
//       warnings: false,
//     },
//   }));
// }

module.exports = config;
