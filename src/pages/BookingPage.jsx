import React from 'react'
import Contact from '@/components/07_Contact/Contact'
import styles from "@/components/Contact/Contact.module.css"

export default function ContactPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroPicture.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>BOOKING</h2>
        </div>
      </div>
      <div >
        <Contact />
      </div>
    </div>  )
}
