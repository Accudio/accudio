const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = withOffline(withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules/simplebar/dist"]
  },
  exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    if (dev) {
      return defaultPathMap
    }
    await copyFile(join(dir, 'root/robots.txt'), join(outDir, 'robots.txt'))
    await copyFile(join(dir, 'root/sitemap.xml'), join(outDir, 'sitemap.xml'))
    await copyFile(join(dir, 'root/_redirects'), join(outDir, '_redirects'))
    return defaultPathMap
  }
}))