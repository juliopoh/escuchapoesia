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
      href: "https://open.spotify.com/show/2wz1OneBIDXpbBYeuyIsJL?si=2I0R0HuaTLK6RT0f7lDIFg&nd=1",
    },  
    {
      name: "google-podcasts",
      title: "Google Podcasts",
      href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg==",
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
      href: "https://www.youtube.com/channel/UCWVxDd-f0EbQ_t56MyLobqw",
    },
    {
      name: "rss",
      title: "RSS",
      href: "https://rss.app/feeds/LzmQRqajnmep6gwA.xml",
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
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/proyecto">
                  Proyecto
                </Link>
              </li>
              <li>
              <Link to="/galeria">Galería</Link>
              </li>
              <li>
                <Link to="/podcast">Podcast</Link>
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
