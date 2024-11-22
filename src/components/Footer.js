import { Link } from "gatsby";
import React from "react";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div>
    
      <div className="copy-rights flex justify-content-between">  
        <div>
              
              <div>
                <nav className={styles.nav}>
                  <ul>
                    <li>
                      <Link to="/">Proyecto</Link>
                    </li>
                    <li>
                      <Link to="/autores">
                        Autores
                      </Link>
                    </li>
                    <li>
                    <Link to="/audiolibros">Audiolibros</Link>
                    </li>  
                    <li>
                      <Link to="/recursos">Recursos</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>  
        
        <p>
          <a
            href="https://open.spotify.com/show/3xiUXsujQNQtLOJGZ46YZK?si=f73144eaf2594dc3"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook link"
          >
            {" "}
            <FaSpotify className="pointer" size={30} />{" "}
          </a>
          <a
            href="https://www.instagram.com/escucha_poesia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram link"
          >
            {" "}
            <FaInstagram className="pointer" size={30} />
          </a>
        </p>
      </div>
      <footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={2} xs="auto">
              <StaticImage
                  src="../images/logo_gob.png"
                  alt="LogoGob"
                />
            </Col>
            <Col sm={10} md="auto">
            <h2 >Proyecto financiado por el Fondo Nacional de Fomento del Libro y la Lectura, convocatoria 2023.</h2>             
            </Col> 
          </Row>
          <div style={{marginTop:"20px"}}>
          <p className="text-center">
            Desarrollado por {" "}
            <a
              href="https://github.com/juliopoh/escuchapoesia"
              target="_blank"
              rel="noreferrer"
            >
              Juliopo
            </a>
            {" "}© {new Date().getFullYear()}{" "}
         </p>
         </div>
        </Container>
      </footer>
    </div>
  );
}
