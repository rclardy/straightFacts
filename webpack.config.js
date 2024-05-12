const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Your other Webpack configurations here
  plugins: [new Dotenv()],
};
