module.exports = {
  siteMetadata: {
    title: "cassie spain",
    menuLinks: [
      {
        name: "about",
        link: "/",
      },
      {
        name: "work",
        link: "/work",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
