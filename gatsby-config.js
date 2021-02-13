/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "hello gatsby",
    author: "sylvanas",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [`posts`],
      },
    },
    // {
    //   resolve: "gatsby-source-mystrapi",
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     contentTypes: [`posts`],
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less",
  ],
}
