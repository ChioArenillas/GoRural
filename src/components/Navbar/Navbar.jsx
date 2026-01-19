import React, { useState } from "react";
import styles from "./Navbar.module.css";


//CAMBIAR LOS LINKS DE LAS PÁGINAS
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/HomePage">GoRural
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
            ? "/assets/Navbar/closeIcon.png"
            : "/assets/Navbar/menuIcon.png"
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li> <a href={'../../ExperiencesPage'}>Experiences</a></li>
            <li> <a href={'../../LocationsPage'}>Locations</a></li>
            <li> <a href={'../../FavouritesPage'}>Favourites</a></li>
            <li> <a href={'../../FAQsPage'}>FAQs</a></li>
            <li> <a href={'../../ContactPage'}>Contact</a></li>
        </ul>
      </div>
      </div>
    </nav>
  )
}
