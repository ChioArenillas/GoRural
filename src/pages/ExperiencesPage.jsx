import React from 'react'
import Experiences from '@/components/Experiences/Experiences'
import styles from "@/components/Hero/Hero.module.css"



export default function ExperiencesPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroExperiences.jpg" alt="HeroImagen" />
        <div className={styles.text}>
          <h2 className={styles.title}>EXPERIENCES</h2>
        </div>
      </div>
      <div >
        <Experiences />
      </div>
    </div>
  )
}
