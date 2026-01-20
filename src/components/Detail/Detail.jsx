import styles from "./Detail.module.css"
import { useRouter } from 'next/router'
import { getExperiencesById } from "@/pages/api/userFecht"
import React from 'react'

export default function Detail() {

    const router = useRouter()
    const { id } = router.query

    const experience = getExperiencesById(id)

  return (
    <div className={styles.details}>
      <img  className={styles.experienceImage} src={experience.img} alt={experience.title} />
      <h1 className={styles.title}>{experience.title}</h1>
        <p className={styles.experienceRating}> ⭐ {experience.rating} ({experience.reviews})</p>
        <p className={styles.experienceInfo}>{experience.description}</p>
      <h1 className={styles.subtitle}>Details</h1>
        <p className={styles.experienceInfo}> ⏱️ Duration: {experience.duration}</p>
        <p className={styles.experienceInfo}> 👩‍🍳 Includes: {experience.includes}</p>
        <p className={styles.experienceInfo}> 🏡 Location: {experience.location}</p>
        <p className={styles.experienceInfo}> 🗣️ Languages: {experience.languages}</p>
        <p className={styles.experienceInfo}> ♿ Accessibility: {experience.accessibility}</p>
        <p className={styles.experienceInfo}> 👨‍👩‍👧‍👦 Recommended For: {experience.recommendedFor}</p>
        <p className={styles.experienceInfo}> 🔁 Cancellation Policy: {experience.cancellationPolicy}</p>
        <p className={styles.experienceInfo}> ❤️ Optional Donation: {experience.optionalDonation}</p>
        <p className={styles.experienceInfo}> 👥 Group Size: {experience.groupSize}</p>
      <div className={styles.reviews}> 

        <h1 className={styles.subtitle}>Reviews:</h1>
        {experience.opinions && experience.opinions.length > 0 ? (
          experience.opinions.map((opinion, index) => (
            <div key={index} className={styles.reviewCard}>
              <p className={styles.reviewUser}>{opinion.user}</p>
              <p className={styles.reviewRating}>{opinion.rating}</p>
              <p className={styles.reviewComment}>{opinion.comment}</p>
            </div>
          )))
         : 
         null
      }
      </div>
      <div>
        <h1 className={styles.subtitle}>Pictures:</h1>
        <p className={styles.experiencePictures}> {experience.pictures}</p>
      </div>
      <div>
        <h1 className={styles.subtitle}>Others:</h1>
        <p className={styles.experienceCard}> </p> {/* Tarjetas de otras experiencias */}
      </div>
    </div>
  )
}
