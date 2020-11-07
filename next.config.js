module.exports = {
  distDir: 'dist',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/news": { page: "/news" },
      "/news/new-a": { page: "/news/new-a" },
      "/news/new-b": { page: "/news/new-b" },
    }
  },
}