const fetch = require('node-fetch');

module.exports = {
  distDir: 'dist',
  async rewrites() {
    return [
      {
        source: '/news/:slug',
        destination: '/blog/article', // Matched parameters can be used in the destination
      },
    ]
  },
}