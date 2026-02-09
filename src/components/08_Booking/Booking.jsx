import React, { useState } from 'react'
import styles from "./Booking.module.css"
import { useRouter } from 'next/router'
import { getExperiencesById } from '@/pages/api/userFecht'

export default function Booking() {

      const router = useRouter()
      const { id } = router.query
    
      if (!router.isReady) {
        return <p>Loading...</p>
      }
    
      const experience = getExperiencesById(id)
      if (!experience) {
        return <p>Experience not found</p>
      }
    

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [price, setPrice] = useState(`{experience.price}`)


    function incrementAdults() {
        setAdults(adults + 1)
    }
    function decrementAdults() {
        if (adults > 0)
            setAdults(adults - 1)
    }
    function incrementChildren() {
        setChildren(children + 1)
    }
    function decrementChildren() {
        if (children > 0)
            setChildren(children - 1)
    }

    return (
        <div className={styles.component}>
            <h1 className={styles.title}>Select number of people:</h1>
            <div className={styles.selectorSection}>
                <div className={styles.selector}>
                    <h2 className={styles.title}>Adults</h2>
                    <button className={styles.selectorBtn} onClick={decrementAdults}>-</button>
                    <h2>{adults}</h2>
                    <button className={styles.selectorBtn} onClick={incrementAdults}>+</button>
                </div>
                <div className={styles.selector}>
                    <h2 className={styles.title}>Children</h2>
                    <button className={styles.selectorBtn} onClick={decrementChildren}>-</button>
                    <h2>{children}</h2>
                    <button className={styles.selectorBtn} onClick={incrementChildren}>+</button>
                </div>
            </div>
            <button className={styles.bookingBtn}>Book now for {experience.price} {experience.currency} </button>
        </div>
    )
}
