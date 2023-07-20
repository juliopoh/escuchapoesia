import { Link } from "gatsby";
import React from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div>
    
      <div className="copy-rights flex justify-content-between">  
        <div className="containernav_container">
              <input className={styles.menuToggle} type="checkbox" id="menu-btn" />
                <label htmlFor="menu-btn" className={styles.menuIcon} id="menu">
                  <span className={styles.navicon}></span>
                </label>
              
              <div className={styles.menu}>
                <nav className={styles.nav}>
                  <ul>
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/proyecto">
                        Proyecto
                      </Link>
                    </li>
                    <li>
                      <Link to="/podcasts">Podcasts</Link>
                    </li>
                    <li>
                      <Link to="/galeria">Galería</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>  
        
        <p>
          <a
            href="https://www.facebook.com/delapizalmicrofono/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook link"
          >
            {" "}
            <FaFacebookSquare className="pointer" size={30} />{" "}
          </a>
          <a
            href="https://twitter.com/delapizalmicrofono"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter link"
          >
            {" "}
            <FaTwitterSquare className="pointer" size={30} />
          </a>
        </p>
      </div>
      <footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={2} xs="auto">
              <StaticImage
                  src="../images/logo_gob.png"
                  alt="Tracy Phillips sponsoring the podcast"
                />
            </Col>
            <Col sm={10} md="auto">
            <h2>Proyecto financiado por el fondo del libro, convocatoria 2022.</h2>             
            </Col> 
          </Row>
          <p className="text-center">
            Desarrollado por {" "}
            <a
              href="https://github.com/juliopoh"
              target="_blank"
              rel="noreferrer"
            >
              Juliopo
            </a>
            {" "}© 2023
         </p>
        </Container>
      </footer>
    </div>
  );
}
