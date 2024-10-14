import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/header.module.css";
import SimpleIcon from "./SimpleIcon";

export default function Header() {
  const subscriptionOptions = [
    {
      name: "spotify",
      title: "Spotify",
      href: "https://open.spotify.com/show/3as6D7zbBd0sOzH0IDQfXz",
    },
    {
      name: "facebook",
      title: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61550348950631",
    },
    {
      name: "instagram",
      title: "Instagram",
      href: "https://www.instagram.com/del_lapiz_al_microfono/",
    },
    {
      name: "yt",
      title: "YouTube",
      href: "https://www.youtube.com/channel/UC6g0vx4LMYN1oOvRdPMgmyA",
    },
    {
      name: "rss",
      title: "RSS",
      href: "https://anchor.fm/s/e816739c/podcast/rss",
    },
  ];

  return (
    <header className={styles.header}>
      <div className="container nav_container">
        <Link to="/" className={styles.logo}>
          <StaticImage src="../images/logo.png" alt="logo" />
        </Link>
        <input className={styles.menuToggle} type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className={styles.menuIcon} id="menu">
          <span className={styles.navicon}></span>
        </label>
        <div className={styles.menu}>
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
                <Link to="/galeria">Galería</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.subscribe}>
            <div className="container nav_container">
              <span>Escúchanos y síguenos en</span>
              <ul>
                {subscriptionOptions.map((option) => (
                  <li key={option.name}>
                    <a href={option.href} aria-label={option.title} target="_blank" rel="noreferrer" >
                      <SimpleIcon {...option} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
