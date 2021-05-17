const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  future: {
    webpack5: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
})
