import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";

export default function GuestGuide() {
  return (
    <Layout>
      <Seo title="Inicio" />
      <div className={styles.sponsor_container}>
        <h1>
        Del lápiz al micrófono
        </h1>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton3.png" alt="logo" /></div> 
        
        <p style={{textAlign:"center"}}>Escritura y podcast desde la montaña</p>
      </div>
       <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            <strong>Del lápiz al micrófono: Escritura y podcast desde la montaña</strong> se trata de una iniciativa de fomento lector, orientada a los estudiantes de dos escuelas <i>unidocente</i> de la localidad de Vilches, en la cordillera de San Clemente, región del Maule, Chile.
          </p>
          <p>
            Los establecimientos que participaron del proyecto son <strong>Escuela Vilches Alto</strong> y <strong>Escuela Los Robles</strong>.
          </p>
        </div>
        </div>
     <section className={styles.indexFooter}>
       
      </section>{" "}
    </Layout>
  );
}
