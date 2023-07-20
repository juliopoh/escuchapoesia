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
      name: "apple-podcasts",
      title: "Apple Podcasts",
      href: "https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en",
    },
  
    {
      name: "google-podcasts",
      title: "Google Podcasts",
      href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg==",
    },
    {
      name: "deezer",
      title: "Deezer",
      href: "https://www.deezer.com/us/show/465682",
    },
    {
      name: "twitter",
      title: "Twitter",
      href: "https://twitter.com/se_unlocked",
    },
    {
      name: "yt",
      title: "YouTube",
      href: "https://www.youtube.com/channel/UCWVxDd-f0EbQ_t56MyLobqw",
    },
    {
      name: "rss",
      title: "RSS",
      href: "https://feeds.simplecast.com/K1_mv0CJ",
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
                <Link to="/podcasts">Podcasts</Link>
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
                    <a href={option.href} aria-label={option.title}>
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
