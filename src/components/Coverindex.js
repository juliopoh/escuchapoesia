import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/sponsor.module.css"


export default function Coverindex() {
  return (
    
  <div className={styles.main}>
       <StaticImage className={styles.video02} src="../images/gallery/image10.jpg" />
       <div className={styles.mainButton}>
        <Link to="/podcast/#begin" className={styles.indexButton}>
            <StaticImage src="../images/indexbutton2.png" alt="logo" />
          </Link>
        </div>
      </div>
  );
}