const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  distDir: 'dist',
  assetPrefix: isProd ? '/' : '',
}