import React from 'react'
import News from '@/components/News/News'
import styles from "@/components/News/News.module.css"

export default function NewsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroNews.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>NEWS</h2>
        </div>
      </div>
      <div >
        <News />
      </div>
    </div>
  )
}
