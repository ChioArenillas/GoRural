import styles from "./Experiences.module.css"
import { useRouter } from 'next/router'
import { getExperiencesById, getOtherExperiences } from "@/pages/api/userFecht"
import React from 'react'
import Experiences from "./Experiences"

export default function Detail() {

  const router = useRouter()
  const { id } = router.query

  const experience = getExperiencesById(id)
  if (!experience) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <img className={styles.experienceImage} src={experience.image} alt={experience.title} />
      </div>
      <div className={styles.component}>
        <div className={styles.details}>
          <h1 className={styles.title}>{experience.title}</h1>
          <p className={styles.experienceRating}> ⭐ {experience.rating} ({experience.reviews})</p>
          <p className={styles.experienceInfo}>{experience.description}</p>
          <h1 className={styles.subtitle}>Details:</h1>
          <div className={styles.experienceInfo}>
            <p> ⏱️ Duration: {experience.duration}</p>
            <p> 👩‍🍳 Includes: {experience.includes}</p>
            <p> 🏡 Location: {experience.location}</p>
            <p> 🗣️ Languages: {experience.languages.map((lang, i) => {
              const isLast = i === experience.languages.length -1
              const isSecondLast = i === experience.languages.length -2
              return(
                <span key={i}> {" "} {lang}{!isLast && (isSecondLast ? " &" : ",")}</span>
              )})}</p>
            <p> ♿ Accessibility: {experience.accessibility}</p>
            <p> 👨‍👩‍👧‍👦 Recommended For: {experience.recommendedFor.map((recom, i) => {
              const isLast = i === experience.recommendedFor.length -1
              const isSecondLast = i === experience.recommendedFor.length -2
              return(
                <span key={i}> {" "} {recom}{!isLast && (isSecondLast ? " &" : ",")}</span>
              )})}</p>
            <p> 🔁 Cancellation Policy: {experience.cancellationPolicy}</p>
            <p> ❤️ Optional Donation: {experience.optionalDonation}</p>
            <p> 👥 Group Size: {experience.groupSize}</p>
          </div>
          <div className={styles.reviews}>
            <h1 className={styles.subtitle}>Reviews:</h1>
            <div className={styles.reviewSection}>
            {experience.opinions && experience.opinions.length > 0 ? (
              experience.opinions.map((opinion, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewCardTop}>
                  <span className={styles.reviewUser}>{opinion.user}</span>
                  <span className={styles.reviewRating}>⭐ {opinion.rating}</span>
                  </div>
                  <div className={styles.reviewCardBottom}>
                  <span className={styles.reviewComment}>{opinion.comment}</span>
               </div>
                </div>
              )))
              :
              null
            }
            </div>
          </div>
          <div>
            {experience.pictures && experience.pictures.length > 0 && (
              <div>
                <h1 className={styles.subtitle}>Pictures:</h1>
                <div className={styles.picturesList}>
                  {experience.pictures.map((src, index) => (
                    <img key={index} src={src} className={styles.pictures} />
                  ))}
                </div>
              </div>
            )}
            <div>
              <h1 className={styles.subtitle}>More Experiences:</h1>
              <Experiences excludeId={id} limit={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
