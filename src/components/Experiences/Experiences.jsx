import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./Experiences.module.css";
import { getExperiences } from '@/pages/api/userFecht';
import Link from 'next/link';


export default function Experiences({excludeId = null, limit = null}) {
  
  const [ experiences, setExperiences] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let experiencesAux = getExperiences()

    if (excludeId){
      experiencesAux = experiencesAux.filter(
        exp => exp.id !== Number(excludeId)
      )
    }
    if (limit) {
      experiencesAux = experiencesAux.slice(0, limit)
    }
    setExperiences(experiencesAux)
  }, [excludeId, limit])

  //AÑADIR EL BUSCADOR Y EL FILTRO POR CATEGORÍA, 
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
                  <img src={experience.img} alt={experience.title} className={styles.cardImage}/>
                  <p className={styles.cardCategorie}>{experience.category}</p>
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
