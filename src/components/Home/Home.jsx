import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Experiences from '../Experiences/Experiences'
import News from '../News/News'
import styles from "./Home.module.css"
import { getExperiences } from '@/pages/api/userFecht'

export default function Home() {

  const [familyExperiences, setFamilyExperiences] = useState([])
  const [asturiasExperiences, setAsturiasExperiences] = useState([])

  useEffect(() => {
    const data = getExperiences()

    setFamilyExperiences(
      data.filter(exp =>
        exp.recommended?.includes("Families")
      ).slice(0, 5))

    setAsturiasExperiences(
      data.filter(exp =>
        exp.locationId?.includes("Asturias")
      ).slice(0, 5)
    )
  }, [])

  return (
    <div className={styles.homeSections}>
      <Hero />
      <div>
        <h1 className={styles.title}>RECOMMENDED FOR FAMILIES</h1>
        <Experiences experiences={familyExperiences} />
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../ExperiencesPage'}>ALL EXPERIENCES</a></button>
        </div>
      </div>

      <div className={styles.backgroundSection}>
        <h1 className={styles.title}>ASTURIAS EXPERIENCES</h1>
        <Experiences experiences={asturiasExperiences} />
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../LocationsPage'}>ALL LOCATIONS</a></button>
        </div>
      </div>
      <div >
        <h1 className={styles.title}>WHAT PEOPLE SAY ABOUT US</h1>
        <div className={styles.reviewSection}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewCardTop}>
              <span className={styles.reviewUser}>Laura M.</span>
              <span className={styles.reviewRating}>⭐ 5</span>
            </div>
            <div className={styles.reviewCardBottom}>
              <span className={styles.reviewComment}>Amazing experiences, very authentic and welcoming.</span>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewCardTop}>
              <span className={styles.reviewUser}>Peter W.</span>
              <span className={styles.reviewRating}>⭐ 5</span>
            </div>
            <div className={styles.reviewCardBottom}>
              <span className={styles.reviewComment}>Real rural experience, loved it.</span>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewCardTop}>
              <span className={styles.reviewUser}>Isabel M.</span>
              <span className={styles.reviewRating}>⭐ 5</span>
            </div>
            <div className={styles.reviewCardBottom}>
              <span className={styles.reviewComment}>Very enjoyable and informative.</span>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewCardTop}>
              <span className={styles.reviewUser}>Miguel A.</span>
              <span className={styles.reviewRating}>⭐ 4</span>
            </div>
            <div className={styles.reviewCardBottom}>
              <span className={styles.reviewComment}>Very natural and relaxing.</span>
            </div>
          </div>          <div className={styles.reviewCard}>
            <div className={styles.reviewCardTop}>
              <span className={styles.reviewUser}>Paula D.</span>
              <span className={styles.reviewRating}>⭐ 5</span>
            </div>
            <div className={styles.reviewCardBottom}>
              <span className={styles.reviewComment}>Perfect for children.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundSection}>
        <h1 className={styles.title}>NEWS</h1>
        <News limit={5} />
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../NewsPage'}>ALL NEWS</a></button>
        </div>
      </div>
    </div>
  )
}




