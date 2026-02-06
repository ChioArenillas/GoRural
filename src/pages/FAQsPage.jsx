import React from 'react'
import FAQs from '@/components/06_FAQs/FAQs'
import styles from "@/components/06_FAQs/FAQs.module.css"

export default function FAQsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroFAQs.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>FAQs</h2>
        </div>
      </div>
      <div >
        <FAQs />
      </div>
    </div>
  )
}
