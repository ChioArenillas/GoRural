import React from 'react'
import Locations from '@/components/Locations/Locations'
import styles from "@/components/Locations/Locations.module.css"


export default function LocationsPage() {
  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroLocations.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>LOCATIONS</h2>
        </div>
      </div>
      <div >
        <Locations />
      </div>
    </div>
  )
}
