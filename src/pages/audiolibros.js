import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import rss from "../images/RSS-Feed-blue-sm.png";
import spot from "../images/spotify_logo.png";
import youtube from "../images/youtube-blue-sm.png";
import instagram from "../images/instagram-blue-sm.png";
import facebook from "../images/facebook-logo-sm-blue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Seo from "../components/seo";
import Coverindex from "../components/Coverindex";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo title="Audiolibros" />
      <Coverindex />
      <section className={styles.episodes} id="begin">
        <h1>Audiolibros</h1>
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
          <h2>Si no quieres perderte los nuevos episodios
            <br/>síguenos en Spotify y en nuestras redes sociales</h2>
          <div class="p-3 body-bg">
          
          </div>
          <div className="icons">
           <a
              href="https://open.spotify.com/show/3as6D7zbBd0sOzH0IDQfXz"
              target="_blank"
              rel="noreferrer"
            >
              <img src={spot} alt="subscribe via Spotify podcast" />
            </a>
            <a
              href="https://www.instagram.com/del_lapiz_al_microfono/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="subscribe via Instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550348950631"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="subscribe via Facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6g0vx4LMYN1oOvRdPMgmyA"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="subscribe via Youtube" />
            </a>
            <a
              href="https://anchor.fm/s/e816739c/podcast/rss"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rss} alt="subscribe via RSS feed" />
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
