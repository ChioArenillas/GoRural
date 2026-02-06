import React, { useEffect, useState } from 'react'
import Hero from '../02_Hero/Hero'
import Experiences from '../03_Experiences/Experiences'
import News from '../05_News/News'
import styles from "./Home.module.css"
import { getExperiences } from '@/pages/api/userFecht'
import { opinions, pictures } from '@/pages/api/db'

export default function Home() {

  const homeTitle = "GORURAL"
  const homeText = "GoRural is a platform created to connect people with authentic rural experiences, supporting local communities and preserving traditional ways of life. Through carefully selected activities in natural environments, we promote sustainable tourism, cultural awareness, and responsible travel. Every booking helps give visibility to rural projects, encourages local development, and supports initiatives through optional donations that protect and revitalize rural areas."
  
  
  const section1Title = "RECOMMENDED FOR FAMILIES"
  const section1Text = "Discover a selection of rural experiences specially recommended for families who want to enjoy meaningful time together. These activities are designed to be safe, educational, and fun, allowing children and adults to learn about nature, traditions, and rural life while creating unforgettable memories in unique natural settings."
  
  const section2Title = "ASTURIAS EXPERIENCES"
  const section2Text = "Explore the essence of Asturias through authentic rural experiences surrounded by breathtaking landscapes, rich culture, and deep-rooted traditions. From outdoor activities to local gastronomy and craftsmanship, these experiences allow you to connect with the land, its people, and its heritage in a responsible and sustainable way."
  
  const section3Title = "WHAT PEOPLE SAY ABOUT US"
  const section3Text = "Real experiences, real stories. Their reviews reflect the authenticity, quality, and positive impact of each experience, helping others discover meaningful ways to travel while contributing to rural sustainability."
  
  const section4Title = "NEWS"
  const section4Text = "Stay up to date with the latest news, stories, and updates related to rural tourism, sustainability, and local initiatives. In this section we share inspiring projects, seasonal highlights, and important information to help you discover new destinations, experiences, and ways to support rural communities."

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

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos(pictures)
  }, [])


  return (
    <div className={styles.homeSections}>
      <Hero />
      <h1 className={styles.title}>{homeTitle}</h1>
      <h3 className={styles.text}>{homeText}</h3>

      <div>
        <h1 className={styles.title}>{section1Title}</h1>
        <h3 className={styles.text}>{section1Text}</h3>
        <div className={styles.scroll}>
          <Experiences experiences={familyExperiences} horizontal={true} />
        </div>
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../ExperiencesPage'}>ALL EXPERIENCES</a></button>
        </div>
      </div>

      <div className={styles.picturesGrid}>
        {photos.length > 0 && photos.map((src, index) => (
                <div key={index} className={styles.pictureItem}>
                <img src={src}  />
                </div>
              ))}
      </div>

      <div className={styles.backgroundSection}>
        <h1 className={styles.title}>{section2Title}</h1>
        <h3 className={styles.text}>{section2Text}</h3>
        <div className={styles.scroll}>
          <Experiences experiences={asturiasExperiences} horizontal={true} />
        </div>
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../LocationsPage'}>ALL LOCATIONS</a></button>
        </div>
      </div>


      <div className={styles.reviews}>
        <h1 className={styles.title}>{section3Title}</h1>
        <h3 className={styles.text}>{section3Text}</h3>
        <div className={styles.reviewSection}>
          {reviews && reviews.length > 0 ? (
            reviews
              .slice(0, typeof window !== "undefined" && window.innerWidth <= 830 ? 3 : reviews.length)
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
        <h1 className={styles.title}>{section4Title}</h1>
        <h3 className={styles.text}>{section4Text}</h3>
        <div className={styles.scroll}>
          <News limit={5} horizontal={true} />
        </div>
        <div className={styles.btnSection}>
          <button className={styles.smallBtn}> <a className={styles.btnLink} href={'../../NewsPage'}>ALL NEWS</a></button>
        </div>
      </div>
    </div>
  )
}




