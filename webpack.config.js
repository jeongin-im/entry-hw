const main = require('./webpack/webpack.main.config');
const renderer = require('./webpack/webpack.renderer.config');
const preload = require('./webpack/webpack.preload.config');

module.exports = [main, preload, renderer];
