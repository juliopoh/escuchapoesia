require('dotenv').config();
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dellapizalmicrofono.cl",
    title: "Del lápiz al micrófono",
    author: {
      name: `Julio Díaz Pérez`,
      summary: `Nothing i'm.`,
    },
    description: `Escritura y podcast desde la montaña.`,
    siteUrl: `https://www.dellapizalmicrofono.cl`,
    social: {
      twitter: `mgreiler`,
    },
    keywords: `software podcast, podcast, literatura, montaña, vilches, maule`,
    defaultogimage: `/og-image.png`,
  },
  trailingSlash: "always",
  plugins: [
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     cssLoaderOptions: {
    //       modules: {
    //         exportLocalsConvention: "camelCaseOnly",
    //       },
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://se-unlocked.us3.list-manage.com/subscribe/post?u=74b1790e5710618801de6d4a7&id=a1f53b7c4f", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-143793976-1",
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `dellapizalmicrofono.cl`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  custom_elements: [
                    { "content:encoded": node.html },
                    { audio: node.frontmatter.audio },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {status: {eq: "publish"}, type: {eq: "post"}}}
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    html
                    frontmatter {
                      permalink
                      date
                      title
                      excerpt
                      audio
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Del lápiz al micrófono RSS Feed",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.dellapizalmicrofono.cl`,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/isokid.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-plugin-instagram",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: "./src/uploads/",
      },
      __key: "uploads",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "transcripts",
        path: "./src/transcripts/",
      },
      __key: "transcripts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
