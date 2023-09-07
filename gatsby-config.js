require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful Starter`,
    description: `Official Contentful Gatsby Starter`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
        // host: process.env.CONTENTFUL_HOST
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`
  ],
};
