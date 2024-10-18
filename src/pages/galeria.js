import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";
import { Carousel } from "react-bootstrap";



export default function GuestGuide() {
  return (
    <Layout>
      <Seo title="Galería" />
      <section className={styles.episodes} id="begin">
        <h1>Galería</h1><br/>
      </section>
      <Carousel fade>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image04.jpg" alt="Taller" />
            <Carousel.Caption>
              <h5>
                Sesión 1 "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image05.jpg" alt="Taller" />
            <Carousel.Caption>
              <h5>
                Sesión "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image06.jpg" alt="Taller" />
              <Carousel.Caption>
              <h5>
                Sesión "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image03.jpg" alt="Taller" />
            <Carousel.Caption>
              <h5>
                Sesión "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image07.jpg" alt="Taller" />
            <Carousel.Caption>
              <h5>
                Sesión "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image08.jpg" alt="Taller" />
            <Carousel.Caption>
              <h5>
                Sesión "Crea tu libro-bitácora"
              </h5>
              <p>
                alumnos aprendiendo a encuadernar con hotmelt. Escuela Vilches Alto, Vilches, mayo 2023.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
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
