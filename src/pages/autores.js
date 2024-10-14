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
      <Container>
        <div class="flex-container flex-md-row">
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_01_ale.jpg"
              alt="Alejandra del Río Lohan"
            />
          </div>
          <div class="flex-child">
            <h4>Alejandra del Río Lohan</h4>
            <p>
              Michaela Greiler has a passion for understanding how people
              develop software. For years, she has been analyzing and improving
              the software development processes at Microsoft. Now she runs her
              own training and consultancy business, where she helps engineering
              teams around the world to make code reviews their superpower. She
              shares her findings through articles on her blog or in scientific
              journals, in publications such as freecodecamp and at conferences.
              And, she also runs a weekly software engineering newsletter that
              more than 1400 people enjoy. With this podcast, she wants to open
              doors of successful software companies, and discuss with her
              guests what it takes to develop scalable, maintainable and
              reliable software people love.
            </p>
          </div>
        </div><br/>
        <div class="flex-container">
          <div class="flex-child">
            <h4>Víctor hugo díaz</h4>
            <p>
              Michaela Greiler has a passion for understanding how people
              develop software. For years, she has been analyzing and improving
              the software development processes at Microsoft. Now she runs her
              own training and consultancy business, where she helps engineering
              teams around the world to make code reviews their superpower. She
              shares her findings through articles on her blog or in scientific
              journals, in publications such as freecodecamp and at conferences.
              And, she also runs a weekly software engineering newsletter that
              more than 1400 people enjoy. With this podcast, she wants to open
              doors of successful software companies, and discuss with her
              guests what it takes to develop scalable, maintainable and
              reliable software people love.
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
            <p>
              Michaela Greiler has a passion for understanding how people
              develop software. For years, she has been analyzing and improving
              the software development processes at Microsoft. Now she runs her
              own training and consultancy business, where she helps engineering
              teams around the world to make code reviews their superpower. She
              shares her findings through articles on her blog or in scientific
              journals, in publications such as freecodecamp and at conferences.
              And, she also runs a weekly software engineering newsletter that
              more than 1400 people enjoy. With this podcast, she wants to open
              doors of successful software companies, and discuss with her
              guests what it takes to develop scalable, maintainable and
              reliable software people love.
            </p>
          </div>
        </div><br/>
        <div class="flex-container">
          <div class="flex-child">
            <h4>Germán Carrasco</h4>
            <p>
              Michaela Greiler has a passion for understanding how people
              develop software. For years, she has been analyzing and improving
              the software development processes at Microsoft. Now she runs her
              own training and consultancy business, where she helps engineering
              teams around the world to make code reviews their superpower. She
              shares her findings through articles on her blog or in scientific
              journals, in publications such as freecodecamp and at conferences.
              And, she also runs a weekly software engineering newsletter that
              more than 1400 people enjoy. With this podcast, she wants to open
              doors of successful software companies, and discuss with her
              guests what it takes to develop scalable, maintainable and
              reliable software people love.
            </p>
          </div>
          <div class="flex-child">
            <StaticImage
              src="../images/gallery/author_04_carrasco.jpg"
              alt="Germán Carrasco"
            />
          </div>
        </div>
        <section class="about-show">
          <h2>About Our Show</h2>
          <hr class="rounded-short"></hr>
          <p>
            This show was born out of Michaela’s curiosity for how different
            companies develop software. How does their tech stack look like?
            Which practices do they follow? Do they do code reviews? Are the
            concerned about technical debt? And what about their culture and
            company values? With this podcast Michaela wants to open doors at
            different companies, and get the perspective of experts in the
            fields about how to develop maintainable, reliable and scaleable
            software people love. Michaela’s guests come from completely
            different backgrounds. Some come from large cooperation such as
            Microsoft, Google or Facebook. Some are founders of their own tech
            startup. And some come from more traditional or smaller businesses.
            What they all have in common is a passion for high-quality software.
            But how do they achieve their goal? As we all know, there isn’t only
            one way of developing quality-software. So, what best practices do
            they value, which management style do they prefer, and do they
            follow a certain software methodology. What problems do they
            struggle with? And which ones did they overcome already? Let’s find
            out together in the Software Engineering Unlocked Podcast!
          </p>
        </section>
        <section class="newsletter">
          <div>
            <h2>Join Our Newsletter</h2>
            <hr class="rounded-short"></hr>
            <p>
              Want to connect on a deeper level? Make sure to hop on the mailing
              list and get behind the scenes information the show, the guests
              and the host.
            </p>
          </div>
        </section>
      </Container>
      </section>
    </Layout>
  );
}
