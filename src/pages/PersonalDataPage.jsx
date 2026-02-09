import React from 'react'
import styles from "@/components/08_Booking/Booking.module.css"
import PersonalData from '@/components/08_Booking/PersonalData'
import { useRouter } from 'next/router'
import { getExperiencesById } from './api/userFecht'

export default function PersonalDataPage() {

  const router = useRouter()
  const { id, adults, children, donation, totalPrice } = router.query

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
      <div >
        < PersonalData 
        adults={Number(adults)}
        children={Number(children)}
        donation={Number(donation)}
        totalPrice={Number(totalPrice)}
        />
      </div>
      </div>
    </div>  )
}
