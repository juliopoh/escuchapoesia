import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";


export default function GuestGuide() {
  return (
    <Layout>
      <Seo title="Galería" />
      <div className={styles.sponsor_container}>
        
        <h1>Galería de imágenes</h1>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image02.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image01.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image03.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image04.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image05.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image06.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image07.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image08.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image09.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image10.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Taller "Conversatorio con autor@s", junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, 7 de agosto 2023.
          </h5>
        </div>
      </div>
    </Layout>
  );
}
