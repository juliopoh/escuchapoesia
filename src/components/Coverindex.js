import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/sponsor.module.css";
import index01 from "../uploads/videos/index01.mp4"


export default function Coverindex() {
  return (
    
  <div className={styles.main}>
       <video src={index01} autoPlay loop muted />
       <div className={styles.mainButton}>
        <Link to="/podcasts/#begin" className={styles.indexButton}>
            <StaticImage src="../images/indexbutton2.png" alt="logo" />
          </Link>
        </div>
      </div>
  );
}