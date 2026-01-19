import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./Experiences.module.css";
import { getExperiences } from '@/pages/api/userFecht';


export default function Experiences() {
  
  const [ experiences, setExperiences] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let experiencesAux = getExperiences()
    setExperiences(experiencesAux)
  }, [])

  
  return (

<div className={styles.experiencesList}>
  {experiences.map((experience) => (
      <div className={styles.experienceCard} key={experience.id}>
        <div className={styles.experienceDetailsTop}>
          <img src={experience.img} alt={experience.title} className={styles.experienceImage}/>
          <p className={styles.experienceCategorie}>{experience.category}</p>
          <h3 className={styles.experienceTitle}>{experience.title}</h3>
          <p className={styles.experienceDuration}>{experience.duration}</p>
        </div>
        <div className={styles.experienceDetailsBottom}>
          <p className={styles.experiencePrice}>{experience.price}{experience.currency}</p>
          <p className={styles.experienceRating}> ⭐ {experience.rating} ({experience.reviews})</p>
        </div>
      </div>
    ))}
    </div>
  )
}
