const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
  space: '9v9v1k9l1c6k',
  accessToken: process.env.CF_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
}

const previewConfig = {
  space: '9v9v1k9l1c6k',
  accessToken: process.env.CF_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
}

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config)
  },
  createPreviewClient() {
    return contentful.createClient(previewConfig)
  },
}
