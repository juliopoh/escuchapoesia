import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Newsletter from "../components/Newsletter";
import * as styles from "../styles/sponsor.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import index02 from "../uploads/videos/index02.mp4"

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
          <p><b>Del lápiz al micrófono, escritura y podcast desde la montaña</b> es una iniciativa de fomento lector financiada por el Fondo del Libro y la Lectura, otorgado por el Ministerio de las Culturas, las Artes y el Patrimonio, en su convocatoria 2022.</p>
          <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton3.png" alt="logo" /></div>
          <p>Dicho proyecto, tiene como objetivo <b>promover la lecto-escritura, la valoración del territorio y el uso de las nuevas tecnologías de información y comunicación (Tic)</b> a través de la implementación de una serie de sesiones de taller con estudiantes de la escuela <b>“Los Robles”</b> y la escuela <b>“Vilches Alto”</b>, de la localidad de Vilches, en la cordillera de San Clemente, región del Maule.</p>
          <p>
Su implementación se propone incentivar el fomento lector a través del <b>rescate y transmisión de la identidad territorial de la comunidad de Vilches, registrando las diversas historias, mitos, cuentos o toponimias que habitan y recorren la localidad.</b>
          </p>
          <p>
            A través de su ejecución, se espera <b>impulsar la capacidad expresiva de los estudiantes, estimulando su imaginación y memoria emotiva con el territorio</b>, como también, acercarlos al ecosistema del libro, poniéndolos en contacto con editores, escritores y encuadernadores de la región del Maule.
          </p>
        </div>
      </div>
      {/*section2*/}
      <div className={styles.section_2}>
      <section className={styles.vilchesTerrain}>
       
       </section>{" "}
        <div className={`${styles.sponsor_container} ${styles.text_left}`}>
          <p className={`${styles.text_left}`}>Localidad : Vilches Alto</p>
          <p className={`${styles.text_left}`}>Colegios : Escuela Los Robles y Escuela Vilches Altos</p>
          <p className={`${styles.text_left}`}>San Clemente / Región del Maule</p>
        </div>
      </div>
      {/*section3 What Sponsor Say*/}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <h3>What Sponsor Say</h3>
          <Row className="mt-4 ml-4 mr-4">
            <Col sm={12} md={6} lg={6}>
              <StaticImage
                src="../images/tracy-2020.jpg"
                alt="Tracy Phillips sponsoring the podcast"
              />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <p className={styles.italic}>
                {" "}
                Sponsoring Software Engineering Unlocked was fun and worth the
                investment! Working with Michaela is always great – she was very
                attentive to our advertising goals, spent time learning about
                our product, and spoke about us to her audience from a place of
                true authenticity. We saw real engagement after the ads and are
                excited to continue working with her in the future.
              </p>
              <p className={styles.italic}>
                Tracy Phillips, Co-Founder at CodeSubmit
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <Row className="mt-4 ml-4 mr-4">
            <Col sm={12} md={6} lg={6}>
              <StaticImage
                src="../images/Elena_Boroda_Fiberplane.jpg"
                alt="Elena Boroda Fiberplane sponsoring the podcast"
              />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <p className={styles.italic}>
                {" "}
                We sponsored SE Unlocked when launching our public beta and found it to be a smooth and worthwhile experience. The collaboration was highly pleasant, from first contact until the release and distribution of the episode, with a fast turnaround time. The ability to present our product in a 45 min episode allowed us to really dive deep into the product and was a great fit for the launch.
Michaela proactively provided us with a thought-provoking interview outline and worked with us to fine-tune it. As the interview was only scripted enough to spark the initial conversation, we were able to present our product authentically and this made the episode educational and informative for the listener
Michaela was a great interviewer too; overall we had a fantastic experience and would easily recommend SE Unlocked.
              </p>
              <p className={styles.italic}>
              Elena Boroda, Head of Marketing at Fiberplane
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {/*section4*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I want to sponsor!</button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/*why sponsor*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        <div style={{textAlign:"center"}}><StaticImage  className={styles.container_image} src="../images/indexbutton.png" alt="logo" /></div>
          {" "}
          <h3>Why advertise on the SE Unlocked podcast?</h3>
          <br/>
          <p>
          The main positive effects of sponsoring the Software Engineering podcasts is to be able 
          to <i>build brand awareness</i>, <i>create a positive association</i> with the product, and <i>reach a very targeted audience</i>. 
          </p>
          <br/>
          <p>
          You have to imagine that podcast listeners have a very strong relationship with the podcast and with me as the host. 
          They spend several hours per month listening to my show, and the audience is highly educated and often in a position 
          to make purchasing decisions in their company. This is also the reason why it's important that there is a great 
          match between your product and my audience. 
          </p>
        </div>
      </div>
      {/*section5 how it works*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93922.03395694563!2d-70.98894498831368!3d-35.62763872501315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665657276ea4a2d%3A0x59f3837c1bd2136b!2sAltos%20de%20Lircay%20Reserva%20Nacional!5e1!3m2!1sen!2scl!4v1690239846487!5m2!1sen!2scl"    
        width="100%" 
        height="450" 
        allowfullscreen
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Vilches Alto Map"></iframe>
          {" "}
          <h3>How it works? </h3>
          <p>
            We love to personally report about our experience with your product.
            This also yields the best results. Therefore, whenever possible, we
            want to make sure to test out the product, or see it in action via a
            demo.
          </p>
          <p>
            In addition, we offer to work with you on your ad message, so that
            your message feels authentic and keeps the tone of the show.
          </p>
          <p>
            Alternatively, you can also send us our favorite script that we
            read.
          </p>
        </div>
      </div>
            {/*section Ad Formats*/}
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
      </div>
      {/* Donation section section8 */}
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
      </div>
      {/*section9*/}{" "}
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
      </div>
      {/*section10 Ready to get in*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I'm ready to get in!</button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/*section11*/}{" "}
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
      </div>
      {/*Demographics*/}
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
      </div>
      <div className={styles.gradient_section}>
        <div className={styles.sponsor_container}>
          <h1 className={styles.text_left}>Libro en PDF</h1>
          <p className="mt-4">Puedes descargar el libro Del lápiz al micrófono, que reúne en escrito la experiencia de fomento a la lecto-escritura.</p>
          <br/>
          <br/>
          <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>Descargar</button>
            </a>
        </div>
      </div>
      
      <Newsletter />
        
      <video className={styles.video02} src={index02} autoPlay loop muted />
      
    </Layout>
  );
}
