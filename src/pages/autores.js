import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";
import * as styles from "../styles/home.module.css";



export default function Autores() {
  return (
    <Layout>
      <Seo title="Los autores de esta colección de audiolibros" />
      <section className={styles.episodes} id="begin">
        <h1>Autores de esta colección</h1><br/>
        </section>
        <Container className={styles.episodes}>
        <div class="flex-container flex-sm-row">
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_01_ale.jpg"
              alt="Alejandra del Río Lohan"
            />
          </div>
          <div class="flex-child">
            <h4>Alejandra del Río Lohan</h4>
            <p>(Santiago, 1972)</p>
            <p>
            Poeta y pedagoga cuya iconoclasta labor ha transitado entre la literatura, la educación y la performance, combinando dichas disciplinas para componer materiales diversos entre los que se aprecian instalaciones plásticas y dramáticas, guiones audiovisuales y poesía concreta.
            Estudio Literatura en la Universidad de Chile y Escritura Autobiográfica y Creativa en la Alice Salomon Hochschule, de Berlín, especializándose como “pedagoga de poesía”, enfoque que releva las necesidades metodológicas y didácticas para una enseñanza efectiva del lenguaje.
            Su obra reconocida con múltiples distinciones, se ha instalado en la tradición poética de chile, como una voz que reflexiona sobre las trampas de la identidad, el desarraigo y el viaje. 

            </p>
          </div>
        </div><br/>
        <div class="flex-container">
          <div class="flex-child">
            <h4>Víctor hugo díaz</h4>
            <p>(Santiago, 1965)</p>
            <p>
            Poeta y crítico identificado con el grupo de la Generación Post 87. Su obra destaca por renovar el imaginario de la poesía chilena, iluminando con su lenguaje lugares cotidianos dibujando así una nueva fisonomía poética para el Santiago de la época.
            Entre sus trabajos destacan La comarca de los senos caídos, Lugares de uso y Hechizas, pomas anticipados.
            Su obra ha sido reconocida con importantes distinciones, como el premio Pablo Neruda, otorgado en el año 2004.

            </p>
          </div>
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_02_victor.jpg"
              alt="Víctor Hugo Díaz"
            />
          </div>
        </div><br/>
        <div class="flex-container">
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_02_moncada.jpg"
              alt="Felipe Moncada Mijic"
            />
          </div><br/>
          <div class="flex-child">
            <h4>Felipe Moncada Mijic</h4>
            <p>(Quellón, Chiloé, 1973)</p>
            <p>
            Poeta y Profesor de Física y Matemáticas. Su obra destacada por el uso de imágenes que transitan por ambientes rurales y urbanos, cuyos paisajes conviven y se invaden mutuamente, dando cuenta de una realidad más compleja que el simple binomio campo-ciudad, renovando así el imaginario de la provincia en la poesía chilena.
            Como poeta ha sido loado con distinciones tales como el Premio Municipal de Santiago (2016) por su libro Silvestre, y como ensayista con el premio a Mejores Obras Inéditas, versión 2015, por su libro Territorios Invisibles.
            Desde el año 2013, se desempeña como editor en el sello Inubicalistas, editorial que cuenta con un amplio catálogo de poesía, ensayos y traducciones.

            </p>
          </div>
        </div><br/>
        <div class="flex-container">
          <div class="flex-child">
            <h4>Germán Carrasco</h4>
            <p>(Santiago, 1971)</p>
            <p>
            Destacado poeta y traductor de la generación del 90.  Su obra volvió a poner en carrera el proyecto lírico en Chile, luego de la manifiesta poesía cívica y la politizada estética de las décadas anteriores. Ampliando el campo de batalla, renovó lecturas y referentes e introdujo a nuestra cultura influencias anglosajonas que el poeta supo adaptar para dotarlas de un sabor local.
            Su poética se caracteriza por un predominantemente componente visual, como también por un lenguaje cercano al habla, con el cual ha retratado variados temas como la urbe o la cordillera, el amor y la paternidad.
            A su vez, ha sabido tomar herramientas de disciplinas parales, como el cine, haciendo uso del montaje para componer sus versos a través de imágenes dispares que logra integrar armónicamente para crear así, una obra que cuenta a su haber con más de 20 libros publicados. 
            Entre sus distinciones sobresalen el Premio Sor Juana Inés de la Cruz el año 2001 y el premio Pablo Neruda en el año 2005. 
            </p>
          </div>
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_04_carrasco.jpg"
              alt="Germán Carrasco"
            />
          </div>
        </div>
        </Container>
    </Layout>
  );
}
