const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  basePath: '/nextjs-personal-site',
  future: {
    webpack5: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
})
