import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";
import * as styles from "../styles/sponsor.module.css";
import index01 from "../uploads/videos/index01.mp4"
import index02 from "../uploads/videos/index02.mp4"

export default function GuestGuide() {
  return (
    <Layout>
      <Seo title="Inicio" />
      <div className="inicio">
       <video src={index01} autoPlay loop muted />
       <div className="inicio-text">
          <h1>Del lápiz al micrófono</h1>
          <h3>
            Escritura y podcast desde la montaña
          </h3>
        </div>
      </div>
       <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            The Software Engineering Unlocked podcast is an up and coming show
            directed to developers, and engineering leaders. Two things all
            listeners have in common is the drive to build better software and
            better engineering cultures.
          </p>
          <p>
            Sponsors that make a perfect match with the Software Engineering
            Unlocked podcast include sponsors that:
          </p>
          <ul>
            <li>offer software that makes developers’ lives better,</li>
            <li>are looking to hire talented folks,</li>
            <li>
              provide high-quality training and education resources such as
              courses or books, or,
            </li>
            <li>offer high-quality products that are beneficial for developers.</li>
          </ul>
        </div>
        </div>
      <Container className="guest-guide pt-3 pb-5">
        <h1 className="pt-5">Del lápiz al micrófono: Escritura y podcast desde la montaña</h1>
        <p>
          I'm excited that you want to become a guest on the Software
          Engineering Unlocked podcast. Here, you find all you need to know
          about the application process and what to expect.
        </p>

        <h2>Step 1: Fill in the Application Form 👋</h2>
        <p>
          Many people want to be a guest on the show. That's awesome. To make
          sure we are a great match, please fill in a short questionnaire.
          There, you can tell us more about you, your background, and the topics
          you are excited to talk about. Find the{" "}
          <b>
            <a
              href="https://forms.gle/iewNkVQ2jKrJDTmj9"
              target="_blank"
              rel="noreferrer"
            >
              application form here.
            </a>
          </b>{" "}
          To make you stand out from the crowd, please to take the time and
          diligence to describe the topic you want to talk about.
        </p>
        <h2>Step 2: Schedule the recording 📅</h2>
        <p>
          If we are a great match, we will follow up with you to schedule the
          interview and to prepare your interview outline. For that, you will
          get a Calendly link that allows you to choose a slot on the Podcast
          Episode calendar.
        </p>
        <h2>Step 3: Prep for the recording 📝</h2>
        <p>
          To make sure you shine during your interview, we will both need to
          prepare for the recording. I will ask you to create an initial outline
          with questions and topics to tackle based on the topic we choose for
          the interview. Then, we will both work on this outline together to
          come up with a great show. This also means I will do some additional
          research, including reading through relevant resources. Feel free to
          send me links to articles, blog posts, talks that are helpful for the
          discussion.
        </p>
        <h2>Step 4: Record the episode! 🎙</h2>
        <p>
          For the recording, we send you a custom link to a Zencastr.com
          session, which we use to record the episode. All you need is a modern
          browser; no accounts to create or software to install! Plan to spend a
          max of 60 minutes for the recording; The recording time will not take
          more than ~30 minutes, but it's always good to have some buffer for
          technical snafus, chatting before we hit record, etc. During the
          recording, all you have to do is talk! And because of the outline and
          previous prep, I'm sure you will be amazing. I'll also make sure to
          keep us on track, and watch the time.
        </p>

        <h2>Step 5: Promote the episode 😎</h2>
        <p>
          After the recording, my team will edit the episode and write the show
          notes. Depending on the podcast schedule, the show goes live either a
          few days or several weeks after the recording. Once the episode is
          aired, we send you a link to the episode, and also mention you on
          Tweets about the episode on Twitter. Please promote it within your
          network and on social media. Promotion is the responsibility of both:
          the podcast host and the guest!
        </p>
      </Container>
      <video className="video02" src={index02} autoPlay loop muted />

    </Layout>
  );
}
