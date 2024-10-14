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
        <p style={{textAlign:"center"}}>Una colección de audiolibros de poesía chilena actual</p>
      </div>
       <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            <strong>Escucha Poesía: Colección de audiolibros de poesía chilena actual</strong> es una iniciativa que se propone fomentar el acercamiento al libro y al género literario de la poesía a personas ciegas, con discapacidad visual y público general, a través de la producción y difusión de una Colección de audiolibros de poetas chilenos contemporaneos. 
          
          
          </p>
        </div>
        </div>
     <section className={styles.indexFooter}>
       
      </section>{" "}
    </Layout>
  );
}
