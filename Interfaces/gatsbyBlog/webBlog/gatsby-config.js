/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
   siteMetadata: {
    title: `Title from siteMetadata`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: 'mongodb+srv://a2svior:RjPWXEMjIwmu9nyS@cluster0-jpop7.mongodb.net/test?retryWrites=true&w=majority', 
        dbName: `test`, 
        collection: `posts`,
        map: { posts: { content: `text/markdown` } }, },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`],
}
