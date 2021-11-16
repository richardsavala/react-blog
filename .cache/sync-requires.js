
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/owner/react-blog/.cache/dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/owner/react-blog/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/owner/react-blog/src/pages/index.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/owner/react-blog/src/templates/blog.js"))
}

