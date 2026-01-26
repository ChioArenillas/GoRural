import styles from "./Detail.module.css"
import { useRouter } from 'next/router'
import { getExperiencesById, getOtherExperiences } from "@/pages/api/userFecht"
import React from 'react'
import Experiences from "../Experiences/Experiences"

export default function Detail() {

    const router = useRouter()
    const { id } = router.query

    const experience = getExperiencesById(id)
    if (!experience) {
      return <p>Loading...</p>
    }

  return (
    <div className={styles.details}>
       <img  className={styles.experienceImage} src={experience.image} alt={experience.title} />
        <h1 className={styles.title}>{experience.title}</h1>
        <p className={styles.experienceRating}> ⭐ {experience.rating} ({experience.reviews})</p>
        <p className={styles.experienceInfo}>{experience.description}</p>
      <h1 className={styles.subtitle}>Details</h1>
      <div className={styles.experienceInfo}>
        <p> ⏱️ Duration: {experience.duration}</p>
        <p> 👩‍🍳 Includes: {experience.includes}</p>
        <p> 🏡 Location: {experience.location}</p>
        <p> 🗣️ Languages: {experience.languages}</p>
        <p> ♿ Accessibility: {experience.accessibility}</p>
        <p> 👨‍👩‍👧‍👦 Recommended For: {experience.recommendedFor}</p>
        <p> 🔁 Cancellation Policy: {experience.cancellationPolicy}</p>
        <p> ❤️ Optional Donation: {experience.optionalDonation}</p>
        <p> 👥 Group Size: {experience.groupSize}</p>
      </div>
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
        {experience.pictures && experience.pictures.length > 0 && (
          <div>
        <h1 className={styles.subtitle}>Pictures:</h1>
        <div>
        {experience.pictures.map((src, index) => (
          <img key={index} src={src} className={styles.pictures}/>
        ))}
        </div>
        </div>
        )}
      <div>
        <h1 className={styles.subtitle}>Others:</h1>
        <Experiences excludeId={id} limit={5}/>
      </div>
    </div>
  </div>
  )
}
