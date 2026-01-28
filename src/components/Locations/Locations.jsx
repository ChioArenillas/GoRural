import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "@/components/Locations/Locations.module.css"
import Link from 'next/link';
import { getLocations } from '@/pages/api/userFecht';


export default function Locations() {

  const [locations, setLocations] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let locationsAux = getLocations()
    setLocations(locationsAux)
  }, [])

  return (

    <div className={styles.cardList}>
      {locations.map((location) => (
        <div key={location.id}>
          <div className={styles.card}>
            <Link className={styles.cardLink} href={{
              pathname: 'DetailLocationsPage',
              query: {
                id: location.id
              }
            }}>
              <div className={styles.cardDetails}>
                <img src={location.img} alt={location.name} className={styles.cardImage} />
                <button className={styles.smallBtn}>{location.name}
                </button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
