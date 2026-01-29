import React from 'react'
import DetailLocations from '@/components/Locations/DetailLocations'
import styles from "@/components/Hero/Hero.module.css"
import { locations } from './api/dbLocations'
import { useRouter } from 'next/router'

export default function DetailLocationsPage() {

  const router = useRouter()
  const { id } = router.query

  const location = locations.find(loc => loc.id === id)

  return (
    <div>
      <div className={styles.hero}>
        <img
          src={location.image}
          alt={location.name}
          className={styles.heroimg}
        />
        <div className={styles.text}>
          <h2 className={styles.title}>{location.name}</h2>
        </div>
      </div>

      <DetailLocations />
    </div>
  )
}
