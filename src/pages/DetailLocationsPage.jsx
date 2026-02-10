import React from 'react'
import DetailLocations from '@/components/04_Locations/DetailLocations'
import { locations } from './api/dbLocations'
import { useRouter } from 'next/router'
import styles from "@/components/04_Locations/Locations.module.css"
import { getLocationsById } from './api/userFecht'

export default function DetailLocationsPage() {

  const router = useRouter()
  const { id } = router.query

  if(!router.isReady) {
    return <p>Loading...</p>
  }
    const location = locations.find(loc => loc.id === id)

  if (!location) {
    return <p>Location not found</p>
  }

  return (
    <div>
      <div className={styles.hero}>
        <img
          src={location.image}
          alt={location.name}
          className={styles.heroimg}
        />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>{location.name}</h2>
        </div>
      </div>

      <DetailLocations />
    </div>
  )
}
