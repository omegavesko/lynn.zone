const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      defaultLayouts: {
        default: require.resolve("./src/components/BlogPostLayout.tsx"),
      },
      gatsbyRemarkPlugins: [`gatsby-remark-smartypants`],
    },
  },
]

if (process.env.NODE_ENV === "production") {
  plugins.push(`gatsby-plugin-preact`)
}

module.exports = {
  siteMetadata: {
    title: `Veselin Romić`,
    description: `Turning ☕ into 💾 since 19XX`,
    author: `@omegavesko`,
  },
  plugins,
}
