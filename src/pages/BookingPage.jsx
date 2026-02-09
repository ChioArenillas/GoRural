import React from 'react'
import styles from "@/components/08_Booking/Booking.module.css"
import Booking from '@/components/08_Booking/Booking'
import { useRouter } from 'next/router'
import { getExperiencesById } from './api/userFecht'

export default function BookingPage() {

  const router = useRouter()
  const { id } = router.query

  if (!router.isReady) {
    return <p>Loading...</p>
  }

  const experience = getExperiencesById(id)
  if (!experience) {
    return <p>Experience not found</p>
  }
  

  return (
    <div>
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <h1 className={styles.navbarTitle}>GoRural</h1>
      </div>
    </nav>
      <div className={styles.hero} >
        <img className={styles.heroimg} src={experience.img} alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>{experience.title}</h2>
        </div>
      </div>
      <div className={styles.component}>
      <h2 className={styles.subtitle}>{experience.description}</h2>
      <div >
        <Booking />
      </div>
      </div>
    </div>  )
}
