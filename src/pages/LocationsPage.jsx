import React from 'react'
import Locations from '@/components/04_Locations/Locations'
import styles from "@/components/04_Locations/Locations.module.css"


export default function LocationsPage() {

  const pageTitle = "LOCATIONS"
  const pageText = "Explore unique rural destinations that preserve their natural beauty, culture, and way of life. Our locations highlight villages and landscapes often overlooked by mass tourism, offering a slower, more genuine way to travel. Each place tells a story and invites you to experience rural life while contributing to its conservation and development."

  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroLocations.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>{pageTitle}</h2>
        </div>
      </div>
        <h3 className={styles.pageText}>{pageText}</h3>
      <div >
        <Locations />
      </div>
    </div>
  )
}
