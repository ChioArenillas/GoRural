import React from 'react'
import Locations from '@/components/Locations/Locations'
import styles from "@/components/Hero/Hero.module.css"


export default function LocationsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroLocations.jpg" alt="HeroImagen" />
        <div className={styles.text}>
          <h2 className={styles.title}>LOCATIONS</h2>
        </div>
      </div>
      <div >
        <Locations />
      </div>
    </div>
  )
}
