import React from 'react'
import Contact from '@/components/Contact/Contact'
import styles from "@/components/Hero/Hero.module.css"

export default function ContactPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroPicture.jpg" alt="HeroImagen" />
        <div className={styles.text}>
          <h2 className={styles.title}>CONTACT</h2>
        </div>
      </div>
      <div >
        <Contact />
      </div>
    </div>  )
}
