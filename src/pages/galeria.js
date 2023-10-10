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
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image04.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Sesión "Crea tu libro-bitácora", alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image05.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Sesión "Crea tu libro-bitácora", alumnos con sus libritos personalizados y encuadernados por ellos mismos. Escuela Vilches Alto, Vilches, mayo 2023.
           </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image06.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Crea tu libro-bitácora", alumnos con sus libritos personalizados y encuadernados por ellos mismos. Escuela Los Robles, Vilches, mayo 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image03.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Sesión "Encuentro con escritores", Donación de libros. Escuela Los Robles, Vilches, agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image07.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Sesión "Aproximación al podcast", alumnos ejercitando y experimentando con el volumen de voz. Escuela Vilches Alto, Vilches, junio 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image08.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Aproximación al podcast", preparando los equipos de grabación. Escuela Los Robles, Vilches, junio 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image09.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Aproximación al podcast", alumnos ensayando volúmenes de voz y la lectura de sus textos. Escuela Los Robles, Vilches, junio 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image10.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Aproximación al podcast", alumnos ensayando volúmenes de voz y la lectura de sus textos. Escuela Los Robles, Vilches, junio 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image01.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
            Sesión "Aproximación al podcast", Escuela Vilches Alto, Vilches, junio 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image02.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Encuentro con escritores", Conversatorio junto a Masiel Zagal, escritora de la región. Escuela Los Robles, Vilches, agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image11.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Encuentro con escritores", Conversatorio junto a Jonnathan Opazo y Felipe Moncada, escritores de la región. Escuela Los Robles, Vilches, agosto 2023.
          </h5>
        </div>
        <div className={styles.gallery_center}>
          <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image12.jpg" alt="Taller" />
          <h5 style={{ textAlign:"right"}}>
          Sesión "Encuentro con escritores", Conversatorio junto a Jonnathan Opazo y Felipe Moncada, escritores de la región. Escuela Los Robles, Vilches, agosto 2023.
          </h5>
        </div>
      </div>
      <div className={styles.gradient_section}>
        <div className={styles.sponsor_container} style={{textAlign:"center"}}>
          <h1>Libro en PDF 📕</h1>
          <p className="mt-4" >Puedes descargar el libro <strong>Del lápiz al micrófono</strong>, que resume parte de la experiencia de este proyecto de fomento lector.</p>
          <br/>
          <br/>
          <a href="https://www.docdroid.net/file/download/jHjH8N1/escritura-y-podcast-web-pdf.pdf" target="_blank" rel="noreferrer">
              <button className={styles.button}>Descargar</button>
            </a>
        </div>
      </div>
    </Layout>
  );
}
