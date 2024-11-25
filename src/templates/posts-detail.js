import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { getImage, getSrc, GatsbyImage } from "gatsby-plugin-image";
import "../styles/markdown.css";
import * as styles from "../styles/posts-detail.module.css";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";
import { constructUrl } from "../components/util";
import { Spotify } from "react-spotify-embed";

export default function PostsDetails({ data }) {
  const { html } = data.markdownRemark;
  const { ogimage } = data;
  const {
    title,
    thumbnail,
    thumbnail_alt,
    permalink,
    excerpt,
  } = data.markdownRemark.frontmatter;

  const ogimagesrc = getSrc(getImage(ogimage.frontmatter.thumbnail));




  return (
    <Layout>
      <Seo
        //canonical={canonical}
        title={title}
        description={excerpt}
        imageUrl={constructUrl(data.site.siteMetadata.siteUrl, ogimagesrc)}
        imageAlt={thumbnail_alt}
      />
      <Container className={styles.podcast_details_container}>
        {/* <GatsbyImage image={getImage(post_header_image)} alt={permalink} /> */}
        {/* <audio controls preload="none">
          <source src={audio} />
        </audio> */}
        {/* {audio_player} */}
        <h1 className={styles.podcast_details}>{title}</h1>

        <div>
         <div>
          <GatsbyImage image={getImage(thumbnail)} alt={permalink} />
        </div> 
          <div className={styles.episode_details}>
            {/* <GatsbyImage
              className={styles.podcast_guest_picture}
              image={getImage(thumbnail)}
              alt={thumbnail_alt}
            /> */}
            {/* {<div dangerouslySetInnerHTML={{ __html: html }} />} */}
            {<div dangerouslySetInnerHTML={{ __html: html }} />}
            {/* {transcript_html}*/}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PostPage($permalink: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(
      frontmatter: { permalink: { eq: $permalink }, type: { eq: "post" } }
    ) {
      html
      frontmatter {
        title
        type
        permalink
        year
        excerpt
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        post_header_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        thumbnail_alt
        audio
      }
    }

    ogimage: markdownRemark(
      frontmatter: { permalink: { eq: $permalink }, type: { eq: "post" } }
    ) {
      frontmatter {
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1200, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }

    transcript: markdownRemark(
      frontmatter: { type: { eq: "transcript" }, permalink: { eq: $permalink } }
    ) {
      html
    }
  }
`;
