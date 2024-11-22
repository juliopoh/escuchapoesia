import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Row, Col, Card, Container }from "react-bootstrap";
import * as styles from "../styles/sponsor.module.css";
import { Carousel } from "react-bootstrap";

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
        
        <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton2.png" alt="logo" /></div>
          {" "}
          <h3 style={{textAlign:"center"}}>Por qué audiolibros?</h3>
          <br/>
          <p>
          El canal auditivo puede ser un gran medio para hacer llegar la literatura a personas que no han podido acceder a ella por, entre otras, dos grandes razones: son personas ciegas o con algún grado discapacidad visual, o son personas que a causa de diversos condicionantes sociales no tienen hábitos lectores y están lejos del acceso al libro. 
          
          </p>
          <br/>
          <p>
          Ambos grandes grupos, sin embargo, muy probablemente cuentan con acceso a un dispositivo tecnológico (teléfono, tablet, computador), a través del cual pueden conectarte a internet y acceder a contenido audiovisual. Allí es donde está el nodo al que apunta este proyecto: si logramos disponer de audiolibros grabados con voz humana, en la mejor calidad y con material complementario, podemos lograr los clics necesarios para que las personas vayan accediendo a “escuchar libros”.
          </p>
          <br/>
          <p>Es un modo más versátil, en el caso de las personas sin discapacidad se puede hacer mientras se realizan otras tareas (lavar la loza, en el transporte público, mientras se descansa); y en el caso de las personas ciegas y con discapacidad visual, les permite conocer muchas más obras que en el formato braille.</p>s
        </div>
      </div>
      <Carousel fade>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image01.jpg" alt="Taller" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image12.jpg" alt="Taller" />
          </Carousel.Item>
          <Carousel.Item>
              <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image09.jpg" alt="Taller" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image03.jpg" alt="Taller" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image07.jpg" alt="Taller" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage  className={styles.container_image_gallery} src="../images/gallery/image11.jpg" alt="Taller" />
          </Carousel.Item>
      </Carousel>
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <h3 style={{textAlign:"center"}}>Discapacidad visual y acceso a bienes culturales</h3>
          <br/>
          <p>
          Las personas ciegas y con discapacidad visual también tienen derecho a la lectura estética, es decir la lectura que se hace por diversión, por disfrute, y que reporta un sinfín de beneficios psicológicos, cognitivos y emocionales. Sin embargo, hoy en día la oferta cultural accesible es prácticamente nula.
          </p>
          <br/>
          <p>El segundo Estudio Nacional sobre Discapacidad -ENDISC II- realizado en 2015, establece que el porcentaje de “personas en situación de discapacidad que declara haber asistido al menos una vez, a una actividad cultural, deportiva o recreativa durante los últimos 6 meses” es de 75%, contrastando con el 92% de personas sin discapacidad. Una diferencia de porcentajes que parece inofensiva pero que refleja una brecha de inequidad. 
El acceso a la lectura estética de las personas ciegas y personas con discapacidad visual es un problema de plena vigencia en Chile, dado que el país no se encuentra entre aquellos que han dado el paso de la ratificación hacia la implementación del Tratado de Marrakech, impulsado en 2013 por la Organización Mundial de Propiedad Intelectual, organizaciones sociales, editoriales y otros actores, que permitiría impulsar la edición de obras accesibles.
</p>
          <p>
         
          </p>
        </div>
        </div>
        <div className={styles.donation}>
        <div className={styles.sponsor_container}>
          <h1>Narración con voz humana</h1>
          <ul>
            <p style={{color:"white"}}>El audiolibro narrado con voz humana tiene la capacidad de evocar un mundo emocional en la audiencia, lo que posibilita su implicación y por tanto, sentimientos, aprendizajes, reflexiones, que lo hacen memorable.
            </p>
            <p style={{color:"white"}}>Los audiolibros de la Colección Escucha Poesía, fueron creados con voz humana, en un proceso riguroso de acercamiento a las obras —y sus autores— así como también al tono, temáticas y significados fundamentales de cada una.
            </p>
          </ul>
        </div>
      </div>
     
  
     
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        
    
         
        </div>
      </div>
      <div className={styles.section_1}>
          <div className={styles.sponsor_container}>
            <h3 style={{textAlign:"center"}}>Creaciones del proyecto</h3><br/>
            <p style={{textAlign:"center"}}>El proyecto Escucha Poesía incluye la realización de los siguientes productos:

</p>
            <Row xs={1} md={3}>
            <Col>
              <Card>
              <StaticImage src="../images/productos/calas.jpg"
                  alt="Calas" />
                  <Card.Body>
                    <Card.Title><strong>Audiolibro</strong></Card.Title>
                    <h4>Calas</h4><h5>de Germán Carrasco</h5>
                    </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <StaticImage src="../images/productos/materialmente.jpg"
                  alt="Materialmente" />
                  <Card.Body>
                    <Card.Title><strong>Audiolibro</strong></Card.Title>
                    <h4>Material mente diario 1998-2008</h4><h5>de Alejandra del Río</h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card>
              <StaticImage src="../images/productos/lugares.jpg"
                  alt="Lugares" />
                  <Card.Body>
                  <Card.Title><strong>Audiolibro</strong></Card.Title>
                    <h4>Lugares de uso</h4><h5>de Víctor Hugo Díaz</h5>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
              <StaticImage src="../images/productos/migratorio.jpg"
                  alt="Migratorio" />
                  <Card.Body>
                  <Card.Title><strong>Audiolibro</strong></Card.Title>
                    <h4>Migratorio</h4><h5>de Felipe Moncada</h5>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
              <StaticImage src="../images/productos/apreciacion.jpg"
                  alt="Audioguia" />
                  <Card.Body>
                  <Card.Title><strong>Audioguía</strong></Card.Title>
                    <h4>Apreciación de la colección</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
              <StaticImage src="../images/productos/braille.jpg"
                  alt="Antologia" />
                  <Card.Body>
                  <Card.Title><strong>Antología</strong></Card.Title>
                    <h4>Antología en braille</h4><h5>32 poemas de la colección</h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
              <StaticImage src="../images/productos/guia.jpg"
                  alt="Guia" />
                  <Card.Body>
                  <Card.Title><strong>Guía impresa</strong></Card.Title>
                    <h4>Apreciación de la colección</h4><h5>con recomendaciones pedagógicas
                  
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          
            <div className={styles.sponsor_container}>
              <div className="d-flex justify-content-center">
                <a href="/audiolibros">
                  <button className={styles.button}>Escuchar audiolibros!</button>{" "}
                </a>
              </div>
            </div>
            <Container className="guest-guide pt-3 pb-5" style={{textAlign:"center"}}>
              <h1 className="pt-5" >Equipo de trabajo</h1>
              <br/>
              <h2>Producción general & edición de audio</h2>
              <p>
              Adiel Alvarado
              </p>
              
              <h2>Edición literaria, asesoría en proceso de grabación & producción de guías</h2>
              <p>
              Alfonso Medrano
              </p>

              <h2>Producción de guías</h2>
              <p>
              Gonzalo Gaete
              </p>
              
              <h2>Locución de audiolibros</h2>
              <p>
              Victoria Hernández
              </p>

              <h2>Diseño gráfico, sitio web, edición formato braille & registro audiovisual</h2> 
              <p>
              Julio Díaz
              </p>
            </Container>
        </div>
      </div>
     <section className={styles.indexFooter}>
       
      </section>{" "}
    </Layout>
  );
}
