import React from 'react'
import FAQs from '@/components/FAQs/FAQs'
import styles from "@/components/Hero/Hero.module.css"

export default function FAQsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroFAQs.jpg" alt="HeroImagen" />
        <div className={styles.text}>
          <h2 className={styles.title}>FAQs</h2>
        </div>
      </div>
      <div >
        <FAQs />
      </div>
    </div>
  )
}
