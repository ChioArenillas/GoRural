import { experiences } from '@/pages/api/db'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getExperiencesById } from '@/pages/api/userFecht'
import styles from "./Booking.module.css"

export default function PersonalData({ adults, children, donation, totalPrice }) {

    const router = useRouter()
    const { id } = router.query

    if (!router.isReady) {
        return <p>Loading...</p>
    }

    const experience = getExperiencesById(id)
    if (!experience) {
        return <p>Experience not found</p>
    }

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [success, setSuccess] = useState(false)

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    function handleBookNow() {
        setSuccess(true)
    }

    return (
        <div>
            <div className={styles.details} >
                <h1> Details:</h1>
                <div className={styles.detailsTop}>
                    <span>Adults: {adults}</span>
                    <span>Children: {children}</span>
                    <span>Donation: {donation} {experience.currency}</span>
                </div>
                <p className={styles.detailsBottom}>Total Price: {totalPrice} {experience.currency}</p>
            </div>
            <div>
                <h1>Personal Data:</h1>
                <div>
                    <p>Name:</p>
                    <input type="text" value={name} onChange={nameHandler} />
                </div>
                                <div>
                    <p>Surname:</p>
                    <input type="text" value={surname} onChange={surnameHandler} />
                </div>
                <div>
                    <p>Phone:</p>
                    <input type="number" value={phone} onChange={phoneHandler} />
                </div>
                <div>
                    <p>Email:</p>
                    <input type="email" value={email} onChange={emailHandler} />
                </div>

            </div>
            <button className={styles.bookingBtn} onClick={handleBookNow}>Book now for {totalPrice} {experience.currency} </button>
        {success && (
            <div onClick={() => setSuccess(false)}>
                <div onClick={(e) => e.stopPropagation()}>
                    <h2>Congratulations!</h2>
                    <p>Your booking has been made, check your email.</p>

                    <button className={styles.smallBtn} onClick={() => {
                        setSuccess(false)
                        router.push('/HomePage')
                    }}>
                        Continue
                    </button>
                </div>
                </div>
        )}
        </div>
    )
}
