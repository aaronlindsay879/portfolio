module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://aaronlindsay.dev/`,
    // Your Name
    name: 'Aaron Lindsay',
    // Main Site Title
    title: `Aaron Lindsay | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack developer.`,
    // Optional: Github account URL
    github: `https://github.com/aaronlindsay879`,
    email: `me@aaronlindsay.dev`,
    // Content of the About Me section
    about: `I'm a motivated, hard working developer with experience ranging from optimising low level programs to implementing user interfaces with modern technology like Blazor.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Raytracer',
        description:
          'A raytracer written with minimal dependencies in rust',
        link: 'https://github.com/aaronlindsay879/raytracer/',
      },
      {
        name: 'Binformat/Savecodec',
        description:
          'A code generation library for converting binary data to and from defined schemas in yaml, with an example project',
        link: 'https://github.com/aaronlindsay879/savecodec',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Rust, C# + .NET, C++, C',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD, Microservices, API design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
