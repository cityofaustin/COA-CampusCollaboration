module.exports = {
  siteMetadata: {
    title: `ATX Project Tracker`,
    tagline: `A bird's eye view of Digital Projects at the City of Austin.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyEi3jMpToeZKaZ1`,
        tables: [
          {
                baseId: `appmgNPTyoltvqsvT`,
            tableName: `projects`,
            tableView: `Grid view`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-110716917-1",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
};
