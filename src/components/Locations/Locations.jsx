import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "@/components/Locations/Locations.module.css"
import Link from 'next/link';
import { getLocations } from '@/pages/api/userFecht';


export default function locations() {

  const [locations, setLocations] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let locationsAux = getLocations()
    setLocations(locationsAux)
  }, [])

  return (

    <div className={styles.cardList}>
      {locations.map((experience) => (
        <div key={experience.id}>
          <div className={styles.card}>
            <div className={styles.cardDetails}>
              <div className={styles.cardDetailsTop}>
                <img src={experience.img} alt={experience.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{experience.city}</h3>
              </div >
              <div className={styles.cardDetailsBottom}>
                <button className={styles.smallBtn}>
                  <Link className={styles.cardLink} href={{
                    pathname: 'DetaillocationsPage',  
                    query: {
                      id: experience.id
                    }
                  }}>Read more</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
