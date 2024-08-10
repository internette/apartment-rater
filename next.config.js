/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./dist`.
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }