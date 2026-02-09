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


    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [donation, setDonation] = useState(0)

    const price = experience.price
    const totalPrice = (adults * price) + (children * price) + donation

    function incrementAdults() {
        setAdults(adults + 1)
    }
    function decrementAdults() {
        if (adults > 1)
            setAdults(adults - 1)
    }
    function incrementChildren() {
        setChildren(children + 1)
    }
    function decrementChildren() {
        if (children > 0)
            setChildren(children - 1)
    }
    function incrementDonation() {
        setDonation(donation + 5)
    }
    function decrementDonation() {
        if (donation > 0)
            setDonation(donation - 5)
    }

    function handleBookNow() {
        router.push({
            pathname: '/PersonalDataPage',
            query: {
                id,
                adults,
                children,
                donation,
                totalPrice
            }
        })
    }



    return (
        <div className={styles.component}>
            <h1 className={styles.title}>Select number of people:</h1>
            <div className={styles.selectorSection}>
                <div className={styles.selector}>
                    <h2 className={styles.subtitle}>Adults</h2>
                    <button className={styles.selectorBtn} onClick={decrementAdults}>-</button>
                    <h2 className={styles.subtitle}>{adults}</h2>
                    <button className={styles.selectorBtn} onClick={incrementAdults}>+</button>
                </div>
                <div className={styles.selector}>
                    <h2 className={styles.subtitle}>Children</h2>
                    <button className={styles.selectorBtn} onClick={decrementChildren}>-</button>
                    <h2 className={styles.subtitle}>{children}</h2>
                    <button className={styles.selectorBtn} onClick={incrementChildren}>+</button>
                </div>
            </div>
            <h1 className={styles.title}>Add a donation:</h1>
            <div className={styles.selectorSection}>
                <div className={styles.selector}>
                    <h2 className={styles.subtitle}>Donation</h2>
                    <button className={styles.selectorBtn} onClick={decrementDonation}>-</button>
                    <h2 className={styles.subtitle}>{donation} {experience.currency}</h2>
                    <button className={styles.selectorBtn} onClick={incrementDonation}>+</button>
                </div>
            </div>

            <button className={styles.bookingBtn} onClick={handleBookNow}>Book now for {totalPrice} {experience.currency} </button>
        </div>
    )
}
