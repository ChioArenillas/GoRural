import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Experiences from '../Experiences/Experiences'
import News from '../News/News'
import styles from "./Home.module.css"
import { getExperiences } from '@/pages/api/userFecht'
import { opinions } from '@/pages/api/db'

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

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(opinions)
  }, [])



  return (
    <div className={styles.homeSections}>
      <Hero />

      <div>
        <h1 className={styles.title}>RECOMMENDED FOR FAMILIES</h1>
        <div className={styles.scroll}>
          <Experiences experiences={familyExperiences} horizontal={true} />
        </div>
        
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../ExperiencesPage'}>ALL EXPERIENCES</a></button>
        </div>
      </div>

      <div className={styles.backgroundSection}>
        <h1 className={styles.title}>ASTURIAS EXPERIENCES</h1>
        <div className={styles.scroll}>
          <Experiences experiences={asturiasExperiences} horizontal={true}/>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../LocationsPage'}>ALL LOCATIONS</a></button>
        </div>
      </div>

      <div className={styles.reviews}>
        <h1 className={styles.title}>WHAT PEOPLE SAY ABOUT US</h1>
        <div className={styles.reviewSection}>
          {reviews && reviews.length > 0 ? (
            reviews
            .slice(0, typeof window !== "undefined" && window.innerWidth <= 600 ? 3 : reviews.length)
            .map((opinion, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewCardTop}>
                  <span className={styles.reviewUser}>{opinion.user}</span>
                  <span className={styles.reviewRating}>⭐ {opinion.rating}</span>
                </div>
                <div className={styles.reviewCardBottom}>
                  <span className={styles.reviewComment}>{opinion.comment}</span>
                </div>
              </div>
            )))
            :
            null
          }
        </div>
      </div>

      <div className={styles.backgroundSection}>
        <h1 className={styles.title}>NEWS</h1>
        <div className={styles.scroll}>
          <News limit={5} horizontal={true}/>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../NewsPage'}>ALL NEWS</a></button>
        </div>
      </div>
    </div>
  )
}




