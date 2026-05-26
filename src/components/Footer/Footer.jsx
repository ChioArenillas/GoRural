import React from 'react'
import styles from "./Footer.module.css"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerText}>
          © 2026 | Designed and code by Rocio Arenillas
        </div>
        <ul className={styles.footerLinks}>
          <li><a href="/ExperiencesPage">Experiences</a></li>
          <li><a href="/LocationsPage">Locations</a></li>
          <li><a href="/NewsPage">News</a></li>
          <li><a href="/FAQsPage">FAQs</a></li>
          <li><a href="/ContactPage">Contact</a></li>
        </ul>
        <div className={styles.copyright}>
          All rights reserved
        </div>
      </div>
    </footer>
  )
}