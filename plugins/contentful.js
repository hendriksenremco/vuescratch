const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: '9v9v1k9l1c6k',
  accessToken: '5TmRrmVOZLb1sqC7xss4aevaED7o-CWGMbF-NmDbCkw',
}

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config)
  },
}
