import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Card, Col, Container } from "react-bootstrap";
import index02 from "../uploads/videos/index02.mp4";

export default function Sponsorship() {
  return (
    <Layout>
       <Seo title="Proyecto" />
       <div className={styles.section_2}>
        <div className={`${styles.sponsor_container} ${styles.text_left}`}>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image_logo} src="../images/logo-tipo.svg" alt="logo" /></div>
        </div>
      </div>
      {/*section1*/}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p><b>Del lápiz al micrófono, escritura y podcast desde la montaña</b> es una iniciativa de fomento lector financiada por el Fondo Nacional de Fomento del Libro y la Lectura, otorgado por el Ministerio de las Culturas, las Artes y el Patrimonio, en su convocatoria 2023.</p>
          <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton3.png" alt="logo" /></div>
          <p>Dicho proyecto, tiene como objetivo <b>promover la lecto-escritura, la valoración del territorio y el uso de las nuevas tecnologías de información y comunicación (Tic)</b> a través de la implementación de una serie de sesiones de taller con estudiantes de la escuela <b>“Los Robles”</b> y la escuela <b>“Vilches Alto”</b>, de la localidad de Vilches, en la cordillera de San Clemente, región del Maule.</p>
          <p>
Su implementación se propone incentivar el fomento lector a través del <b>rescate y transmisión de la identidad territorial de la comunidad de Vilches, registrando las diversas historias, mitos, cuentos o toponimias que habitan y recorren la localidad.</b>
          </p>
          <p>
            A través de su ejecución, se espera <b>impulsar la capacidad expresiva de los estudiantes, estimulando su imaginación y memoria emotiva con el territorio</b>, como también, acercarlos al ecosistema del libro, poniéndolos en contacto con editores, escritores y encuadernadores de la región del Maule.
          </p>
          <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <Row className="mt-4 ml-4 mr-4">
            <Col sm={12} md={6} lg={6}>
              <div className={styles.sponsor_container}>
              <StaticImage
                src="../images/escuela_robles.jpg"
                alt="Escuela Los Robles"
              />
              <h5>
                {" "}
                Escuela Los Robles
                <br/> Vilches Centro, San Clemente
                 </h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className={styles.sponsor_container}>
            <StaticImage
                src="../images/escuela_vilches.jpg"
                alt="Escuela Vilches Alto"
              />
              <h5>
              {" "}
              Escuela Vilches Alto
              <br/> Vilches Alto, San Clemente
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton.png" alt="logo" /></div>
          {" "}
          <h3 style={{textAlign:"center"}}>Por qué un podcast?</h3>
          <br/>
          <p>
          Pensamos que puede ser un medio perfecto para llamar la atención de l@s niñ@s, y una vía para su libre expresión por medio de la palabra, el sonido, y también el ruido. 
          
          </p>
          <br/>
          <p>
          Así mismo,  permite a l@s estudiantes de una ruralidad particular, ponerse en contacto con alguna de las últimas tecnologías de la información y la comunicación, que llevan un tiempo afianzándose en la cultura urbana, como las plataformas Spotify, Youtube, etc. Creemos que esto amplía el campo de observación de su territorio, lo que implica una interpretación mas nutrida del entorno.
          </p>
        </div>
      </div>
      {/*section2*/}
      <div className={styles.section_2}>
      <section className={styles.vilchesTerrain}>
       </section>{" "}
       {/* } <div className={`${styles.sponsor_container} ${styles.text_left}`}>
          <p className={`${styles.text_left}`}>Localidad : Vilches Alto</p>
          <p className={`${styles.text_left}`}>Colegios : Escuela Los Robles y Escuela Vilches Altos</p>
          <p className={`${styles.text_left}`}>San Clemente / Región del Maule</p>
        </div>
      */}
      </div>
      {/*section3 What Sponsor Say*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <h3 style={{textAlign:"center"}}>Vilches, una montaña mágica</h3>
          <br/>
          <p>
          A no más de 70 kilómetros de la capital regional (Talca), Vilches se muestra como una localidad montañosa muy atractiva para las distintas personas que la visitan. Hace tres décadas se fundó la Rerserva Altos del Lircay, lo que impulsó el turismo en la zona. La cantidad de quebradas, riachuelos, cimas y bosques han despertado la curiosidad de científicos como biólogos y geólogos, ya que gracias a su accidentada geografía conserva sectores con baja intervención artificial.
          </p>
          <br/>
          <p>
         
          </p>
        </div>
      </div>

    
     
      {/*section4
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I want to sponsor!</button>{" "}
            </a>
          </div>
        </div>
      </div>
      */}
      {/*why sponsor*/}
     
      {/*section5 how it works*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        <h3 style={{textAlign:"center"}}>Reserva Altos del Lircay: Biodiversidad del territorio </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93922.03395694563!2d-70.98894498831368!3d-35.62763872501315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665657276ea4a2d%3A0x59f3837c1bd2136b!2sAltos%20de%20Lircay%20Reserva%20Nacional!5e1!3m2!1sen!2scl!4v1690239846487!5m2!1sen!2scl"    
        width="100%" 
        height="450" 
        allowfullscreen
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Vilches Alto Map"></iframe>
          {" "}
         
          <p>
          La unidad <strong>Altos de Lircay</strong> está ubicada en la Región del Maule, provincia de Talca, comuna de San Clemente. Fue creada el 11 de junio de 1996.
La unidad destaca por la protección de las especies de fauna como el <strong>pudú, el puma y la loica</strong>. En lo que a flora se refiere está el <strong>hualo y huala, clasificadas como vulnerables.</strong>
          </p>
          <p>
            Entre los lugares más destacados podríamos nombrar:</p>
            <p>
         <strong>Laguna del Alto</strong>: 20 kilómetros. Duración del recorrido a pie: 8 horas. Sendero en parte bajo el bosque nativo de robles, coigües y ñirres y estepa altoandina alcanza la laguna, luego de una fuerte subida y similar bajada<br/>

          <strong>El Enladrillado:</strong> 20 km. Duración del recorrido a pie: 8 horas. Llegar a la planicie de grandes rocas fracturadas, que se asemejan a grandes ladrillos, y donde se observa la gran cadena de volcanes donde destaca el <strong>Descabezado Grande, el Cerro Azul y el Quizapú; este último hizo erupción el año 1932</strong>.<br/>

         <strong>Aliwenmahuida:</strong> 900 metros. Duración del recorrido a pie: 1 hora. Sendero de interpretación ambiental, todo bajo bosque nativo, con paneles informativos apropiados termina en un espectacular mirador hacia el río Lircay y el cerro el Morillo;<br/>

         <strong>Mirador El Peine:</strong> 4 km total. Duración del recorrido 3 hrs. Sendero con pendiente activa que llega a miradores naturales en ladera de Cerro El Peine.
          </p>
          <p style={{textAlign:"right"}}>
           * Información extraída de <a href="https://www.conaf.cl/parques/reserva-nacional-altos-de-lircay/" target="_blank" rel="noreferrer"> Conaf</a>
          </p>
        </div>
      </div>
            {/*section Ad Formats
            <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          {" "}
          <h3>Advertisement Options</h3>
          <p>
          We offer two options for advertising with us: 60-second podcast advertisements (ad-spots), and 45-min sponsored episodes.
          <br/>
          </p>
          <br/>
          <p>
          <b>Ad-spots</b> are 60-second advertisements that play at the beginning of each show. 
          During this time, we will promote your company and its products by highlighting the key features and benefits, 
          as well as how listeners can find and purchase the product (website). <br/>
          Ad-spots are best used for building brand awareness and can be most effective when aired multiple times in 
          succession to help listeners remember the brand and product.
          </p>
        </div>
      </div>*/}
      {/* Donation section section8 
      <div className={styles.donation}>
        <div className={styles.sponsor_container}>
          <h1>What you will get</h1>
          <ul>
            <li>A one-minute sponsor spot at the beginning of the show .</li>
            <li>
              A dedicated sponsorship section on the episode website page including a link to your website, and a
              slogan.
            </li>
            <li>
              A sponsorship section within the show notes syndicated to podcast
              clients and our RSS feed, reaching users independent of the
              podcast client.
            </li>
            <li>
              One tweet introducing you to our Twitter audience for every three
              episodes sponsored.
            </li>
            <li>
              At least one mention in our monthly SE Unlocked newsletter – and
              follow-up mentions as long as you are an active sponsor.
            </li>
            <li>
              We currently only accept <span>two external sponsors</span> per
              episode, making sure you get all the spotlight.
            </li>
          </ul>
        </div>
      </div>*/}
      {/*section9{" "}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
        <h3>Topics of the Software Engineering Unlocked podcast</h3>
          <p>
            The topics discussed in the podcast range from engineering
            methodologies to software engineering best practices, and experience
            reports of day-to-day work life at certain companies.
          </p>
          <p>
            Another topic that is highly valuable is interviewing experiences
            and hiring decisions, attracting listeners that are ready for a new
            role.
          </p>
          <p>
            Sponsoring the podcast is ideal for all who want to reach an engaged
            audience that is enthusiastic about software quality, software
            engineering rigor, and that strives to build welcoming and including
            engineering cultures.
          </p>
        </div>
      </div>*/}
      {/*section10 Ready to get in
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I'm ready to get in!</button>{" "}
            </a>
          </div>
        </div>
      </div>*/}
      {/*section11 {" "}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            Just within one year, the podcast has reached a wide audience of
            quality-focused software engineers and product-folks. The podcast
            has been listened to over 160,000 times. Each episode averages around
            1,500 listens. The number of listens each episode gets is quite
            stable, showing a loyal, yet growing listener base. Some of the most
            downloaded episodes reach around 5,000 people.
          </p>
        </div>
      </div>*/}
      {/*Demographics
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h1 className={styles.text_left}>Demographics</h1>
              <p>
                Most of our listeners are from the USA 36%, Europe 35%, and
                Canada 4.72%.
              </p>
              <ol>
                <li>USA 36.3%</li>
                <li>UK 9.28%</li>
                <li>Germany 7.98%</li>
                <li>Canada 4.72%</li>
                <li>India 3.18%</li>
                <li>Australia 2.83%</li>
                <li>France 2.44%</li>
                <li>The Netherlands 2.38%</li>
                <li>Brazil 1.94%</li>
                <li>Austria 1.77%</li>
              </ol>
            </Col>
            <Col sm={12} md={7} lg={7}>
              <StaticImage
                src="../images/map.png"
                alt="Michaela Greiler recording a show"
              />
            </Col>
          </Row>
        </div>
      </div>*/}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <h3 style={{textAlign:"center"}}>Equipo del proyecto</h3>
          <Row xs={1} md={3}>
          <Col>
            <Card>
             <StaticImage src="../images/team/alfonso.jpg"
                alt="Alfonso Medrano" />
                <Card.Body>
                  <Card.Title><strong>Alfonso Medrano</strong><br/>Psicólogo Educacional y Editor</Card.Title>
                  <h4>Coordinador del proyecto. Monitor. Grabación del podcast. Editor libro 'Del lápiz al micrófono'.</h4>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <StaticImage src="../images/team/carol.jpg"
                alt="Carol Alvarado" />
                <Card.Body>
                  <Card.Title><strong>Carol Alvarado</strong><br/>Psicólogo Educacional y Gestor Cultural</Card.Title>
                  <h4>Monitor. Responsable del diseño metodológico del proyecto. Editor del podcast.</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card>
            <StaticImage src="../images/team/julio.jpg"
                alt="Julio Díaz" />
                <Card.Body>
                <Card.Title><strong>Julio Díaz</strong><br/>Diseñador gráfico y Editor</Card.Title>
                  <h4>Monitor. Registro audiovisual. Edición y gráfica del proyecto. </h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <h3 style={{textAlign:"center"}}>Colaboradores</h3>
          <br/>
          <p>
          Este proyecto no se podría haber realizado sin la colaboración de las profesoras <strong>Daniela Farías</strong> (Vilches Alto) y <strong>Rosalía Venegas</strong> (Escuela Los Robles) y la directora de la escuela Los Robles <strong>Marta Sepúlveda</strong>. También participaron l@s escritor@s <strong>Masiel Zagal, Felipe Moncada y Jonathan Opazo</strong>, llevando a cabo conversatorios sobre el oficio literario.
          </p>
          <br/>
          <p>
         
          </p>
        </div>
      </div>
       <Container className="guest-guide pt-3 pb-5">
        <h1 className="pt-5">Sesiones del taller</h1>
        <p>
          El proyecto contempló un cronograma de actividades que se ha llevado a cabo a partir de mayo hasta octubre 2023.
        </p>

        <h2>Sesión 1:<br/>Crea tu libro-bitácora 📔</h2>
        <p>
        Manufacturación guiada de un libro encuadernado. Se revisó el proceso de encuadernación mediante tres técnicas distintas.
        <br/>1. Encuadernación semi-industrial con Hotmelera. 
        <br/>2. Encuadernación artesanal con prensas, hilos de volantín, sierra y cola-fría. 
        <br/>3. Perforación y anillado.
        <br/>Los libros confeccionados durante la sesión fueron utilizados como bitácora de registro por los estudiantes durante el periodo de implementación del taller.
        </p>
        
        <h2>Sesión 2:<br/>Aproximación a la escritura ✏️</h2>
        <p>
        Escritura de Haiku. Textos literarios y Naturaleza. Se presentaron tres tipos de texto relacionados con la naturaleza: haiku, piam y fábula, profundizando en el primero. A través del ejemplo de un 'pie forzado' (Versos de distintos escritores orientales antiguos) se promovió la elaboración guiada de un texto en la bitácora, ambientado en escenas del entorno natural de la escuela o el hogar, con un mínimo de rigor métrico, contabilizando las sílabas del primer (5) segundo (7) y tercer (5) verso.
        </p>
       
        <h2>Sesión 3:<br/>Un tesoro en la biblioteca 📚</h2>
        <p>
        Aproximación a tipos de géneros literarios, datos de edición y modos de cita bibliográfica (Referencias). Lxs estudiantes realizaron la búsqueda activa de textos en libros de la biblioteca con la orientación de los monitores. Se establecieron rangos etáreos para orientar la selección de libros y textos según el nivel de desarrollo lector de cada estudiante. Luego se acompañó la escritura (copia) de los textos escogidos en libro personal, incluyendo citas bibliográficas. 
        </p>

        <h2>Sesión 4:<br/>Aproximación al podcast 📻</h2>
        <p>
        Se hizo una presentación de conceptos asociados al podcast y la grabación de audio. También se presentaron los equipos de grabación para el registro del podcast. Se ensayaron volumenes de voz, ejercicios vocales, y una charla de buenas prácticas en el estudio de grabación.
        </p>

        <h2>Sesión 5:<br/>1era Grabación 🎤</h2>
        <p>
        Se graban los primeros registros del podcast, se de énfasis a la entrada del podcast (intro), se seleccionan las voces principales.
        </p>

        <h2>Sesión 6:<br/>Encuentro con escritores 🕵️‍♀️</h2>
        <p>
        Conversatorio junto a Masiel Zagal, escritora maulina, proveniente de Panimávida.
        </p>

        <h2>Sesión 7:<br/>Encuentro con escritores 🕵</h2>
        <p>
          Conversatorio junto a Felipe Moncada y Jonathan Opazo, ambos poetas de la región del Maule.
        </p>
        <h2>Sesión 8, 9 y 10:<br/>Grabación 🎤</h2>
        <p>
        Se graba parte importante del contenido, principalmente los textos con la narrativa de cada estudiante.
        </p>
        <h2>Sesión 11:<br/>Últimos detalles 🎧</h2>
        <p>
        Grabación final del podcast, se afinan últimos detalles de edición, presentación a los alumnos de la pista completa.
        </p>
        <h2>Sesión 12:<br/>Cierre de taller 💥</h2>
        <p>
          Para cerrar el taller se hace la presentación oficial del podcast de cada escuela, en este acto también se hace el lanzamiento de libro que relata parte de la experiencia vivida en el taller.
        </p>
      </Container>
      <video className={styles.video02} src={index02} autoPlay loop muted />
    </Layout>
  );
}
