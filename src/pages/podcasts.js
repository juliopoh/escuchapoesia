import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import rss from "../images/RSS-Feed-blue-sm.png";
import pod from "../images/google-podcast-blue-sm.png";
import deezer from "../images/deezer-blue-sm.png";
import itunes from "../images/itunes-blue-sm.png";
import twitter from "../images/twitter-logo-sm-blue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Seo from "../components/seo";
import Coverindex from "../components/Coverindex";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo title="Podcasts" />
      <Coverindex />
      <section className={styles.episodes} id="begin">
        <h1>Podcasts</h1>
        <ul>
          {posts.map((posts) => (
            <li key={posts.id}>
              <Link
                className={styles.episodeCard}
                to={posts.frontmatter.permalink}
                key={posts.id}
              >
                <div className={styles.cardPicture}>
                  <GatsbyImage
                    image={getImage(posts.frontmatter.thumbnail)}
                    alt={posts.frontmatter.permalink}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.episodeTitle}>
                    {posts.frontmatter.title}
                  </h2>
                  <p className={styles.episodeExcerpt}>
                    {posts.frontmatter.excerpt}
                  </p>
                  <audio controls preload="none">
                    <source src={posts.frontmatter.audio} />
                  </audio>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="follow-us">
        <div className="follow-us-text">
          <h2>Si no quieres perderte los nuevos episodios, síguenos en Spotify, Google, Deezer, o via RRSS</h2>
          <div class="p-3 body-bg">
          
          </div>
          <div className="icons">
            <a
              href="https://feeds.simplecast.com/K1_mv0CJ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rss} alt="subscribe via RSS feed" />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={pod} alt="subscribe via Google podcast" />
            </a>
            <a
              href="https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={itunes} alt="subscribe via iTunes" />
            </a>
            <a
              href="https://twitter.com/se_unlocked"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="subscribe via Twitter" />
            </a>
            <a
              href="https://www.deezer.com/us/show/465682"
              target="_blank"
              rel="noreferrer"
            >
              <img src={deezer} alt="subscribe via Deezer" />
            </a>
          </div>
        </div>
        </section>{" "}
      <section className={styles.podcastFooter}>
       
      </section>{" "}
    </Layout>
  );
}

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { status: { eq: "publish" }, type: { eq: "post" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          status
          permalink
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          excerpt
          type
          audio
        }
        id
      }
    }
  }
`;
