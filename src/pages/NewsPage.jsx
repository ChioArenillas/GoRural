import React from 'react'
import News from '@/components/05_News/News'
import styles from "@/components/05_News/News.module.css"

export default function NewsPage() {

    const pageTitle = "NEWS"
  const pageText = "Stay up to date with the latest stories, initiatives, and opportunities within rural tourism. In this section, we share news about new experiences, community projects, sustainability efforts, and ways you can get involved. It’s your window into how travel can make a positive impact beyond the journey itself."
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroNews.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>{pageTitle}</h2>
        </div>
      </div>
        <h3 className={styles.pageText}>{pageText}</h3>
      <div >
        <News />
      </div>
    </div>
  )
}
