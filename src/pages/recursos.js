import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";



export default function GuestGuide() {
  return (
    <Layout>
      <Seo title="Recursos" />
      <section className={styles.episodes} id="begin">
        <h1>Recursos</h1><br/>
        <h2>Aquí podrás encontrar algunos materiales que resultaron de este proyecto</h2>
      </section>
      <div className={styles.section_1}>
      <div className={styles.sponsor_container}>
          <Row xs={1} md={3}>
            <Col>
              <Card style={{ width: '30rem' }}>
               <StaticImage variant="top" src="../images/productos/guia.jpg" alt="Audioguia" />
                <Card.Body>
                  <Card.Title><b>Guía de apreciación con recomendaciones pedagógicas</b></Card.Title>
                  <Card.Text>
                    <h5>
                    Este material complementario está diseñado para docentes, profesionales de instituciones apoyo, madres, padres o tutores de personas con discapacidad visual o personas con dificultades de lectura. Consta de análisis de las obras y de los elementos que componen la poesía, así como actividades de apreciación, reflexión y creación
                    </h5>
                  </Card.Text>
                  <a href="https://mega.nz/file/cAkiDBBA#Q60ksoMHOqO0QF_r_zTdpQr5QoMe_NEVEtVdYRyo_hM" target="_blank" rel="noreferrer">
                  <Button variant="danger">Descargar</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '30rem' }}>
               <StaticImage variant="top" src="../images/productos/apreciacion.jpg" alt="Audioguia" />
                <Card.Body>
                  <Card.Title><b>Guía de apreciación en audio</b></Card.Title>
                  <Card.Text>
                    <h5>
                    En este material complementario podrás escuchar reseñas de las obras, notas biográficas de los autores, análisis de algunos poemas y un apartado sobre los recursos de la poesía.
                    </h5>
                  </Card.Text>
                  <a href="https://open.spotify.com/episode/0wqIoHmp0U825BoVNNYVaU?si=c1c9537fa0474d38" target="_blank" rel="noreferrer">
                  <Button variant="danger">Escuchar</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '30rem' }}>
               <StaticImage variant="top" src="../images/productos/braille.jpg" alt="Audioguia" />
                <Card.Body>
                  <Card.Title><b>Antología en braille</b></Card.Title>
                  <Card.Text>
                    <h5>
                    Este material fue desarrollado por el equipo a partir de la selección de poemas de las 4 obras de la Colección, fue traducido y corregido con la ayuda de la Biblioteca Central para Ciegos e impreso en nuestros talleres.<br/>
<b>Si eres una persona con discapacidad visual lectora de braille o conoces a alguien, contáctanos al siguiente correo y solicita un ejemplar de la Antología:</b> <a href="mailto:escuchapoesia.proyecto@gmail.com">escuchapoesia.proyecto@gmail.com</a> 

                    </h5>
                  </Card.Text>
                  <a href="https://mega.nz/file/INFD1CZb#NonAqHnSv5UDcqhaGtheJt1kTo3qwjCu2ygO_uO5mag" target="_blank" rel="noreferrer">
                  <Button variant="danger">Descargar</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
           </Row>
     
      </div>
      </div>
    </Layout>
  );
}
