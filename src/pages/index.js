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
        Escucha poesía
        </h1>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/logo.png" alt="logo" /></div> 
        
        <p style={{textAlign:"center"}}>Audiolibros de poesía chilena</p>
      </div>
       <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            <strong>Del lápiz al micrófono: Escritura y podcast desde la montaña</strong> es una iniciativa de fomento lector implementada en dos escuelas <i>multi-grado</i> de la localidad de Vilches, en la cordillera de San Clemente, región del Maule, Chile.
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
