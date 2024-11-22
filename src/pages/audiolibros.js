import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
