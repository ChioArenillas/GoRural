import React from 'react'
import News from '@/components/News/News'
import styles from "@/components/Hero/Hero.module.css"

export default function NewsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroNews.jpg" alt="HeroImagen" />
        <div className={styles.text}>
          <h2 className={styles.title}>NEWS</h2>
        </div>
      </div>
      <div >
        <News />
      </div>
    </div>
  )
}
