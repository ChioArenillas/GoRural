import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "../Experiences/Experiences.module.css";
import { getExperiencesByLocation, getLocationsById } from '@/pages/api/userFecht';
import Link from 'next/link';

export default function ExperiencesByLocation() {

  const [experiences, setExperiences] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id) return
    const location = getLocationsById(id)

    if (!location) return
    const experiencesAux = getExperiencesByLocation(location.name)
    setExperiences(experiencesAux)
  }, [id])

  return (

    <div className={styles.cardList}>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <div className={styles.card}>
            <Link className={styles.cardLink} href={{
              pathname: 'DetailPage',
              query: {
                id: experience.id
              }
            }}>
              <div className={styles.cardDetails}>
                <div className={styles.cardDetailsTop}>
                  <img src={experience.image} alt={experience.title} className={styles.cardImage} />
                  <div className={styles.cardCategorieSection}>
                    {experience.category.map((c, index) => (
                      <span key={index} className={styles.cardCategorie} >{c}</span>
                  ))} </div>
                  <h3 className={styles.cardTitle}>{experience.title}</h3>
                  <p className={styles.cardDuration}>{experience.duration}</p>
                </div>
                <div className={styles.cardDetailsBottom}>
                  <p className={styles.cardPrice}>{experience.price}{experience.currency}</p>
                  <p className={styles.cardRating}> ⭐ {experience.rating} ({experience.reviews})</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
