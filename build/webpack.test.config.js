const base = require('./webpack.base.config');

const config = Object.assign({}, base, {});

// No need for app entry during tests
delete config.entry;

module.exports = config;
