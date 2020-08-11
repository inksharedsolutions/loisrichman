module.exports = {
  siteMetadata: {
    title: `Lois Richman`,
    description: `Official Stratton Templates`,
    author: `@Lois Richman`,
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options:{
          spaceId :'eccm8bbfgbb2',
          accessToken: 'iAjL4UbYn75PFcZF13vGerKew40ESsVxOCfsLbKs_as',
        }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo/head_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- endexcerpt -->`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
