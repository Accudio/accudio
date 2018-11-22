const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

module.exports = withOffline(withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules/simplebar/dist"]
  }
}))