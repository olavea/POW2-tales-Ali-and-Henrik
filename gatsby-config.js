module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reading POW! tales for Ali-and-Henrik`,
        short_name: `POW! tales`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `book/images/UnicornLillian2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,
        audioPath: `book/audio`,
        infoLink: {
          title: "POW! on GitHub",
          url: `https://github.com/raae/pow-app.git`,
        },
      },
    },
  ],
  siteMetadata: {
    // First page will have siteTile as page title,
    // the other pages follow this configuration <page#> | <siteTitle>.
    siteTitle: `reading POW! tales for Ali-and-Henrik`,
    // Used for SEO
    siteDescription: `reading POW! tales for Ali-and-Henrik at Oslo Norway`,
    // Will be set on the <html /> tag
    siteLanguage: `no`,
    // Twitter Handle
    author: `@OlaHolstVea`,
  },
}
