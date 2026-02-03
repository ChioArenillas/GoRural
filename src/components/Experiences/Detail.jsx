import styles from "./Experiences.module.css"
import { useRouter } from 'next/router'
import { getExperiencesById, getOtherExperiences } from "@/pages/api/userFecht"
import React from 'react'
import Experiences from "./Experiences"
import { experiences } from "@/pages/api/db"

export default function Detail() {

  const router = useRouter()
  const { id } = router.query

  if (!router.isReady) {
    return <p>Loading...</p>
  }

  const experience = getExperiencesById(id)
  if (!experience) {
    return <p>Experience not found</p>
  }

  const otherExperiences = getOtherExperiences(id).slice(0, 5)


  return (
    <div>
      <div>
        <img className={styles.experienceImage} src={experience.img} alt={experience.title} />
      </div>
      <div className={styles.component}>
        <div className={styles.details}>
          <div>
            <h1 className={styles.title}>{experience.title}</h1>
            <p className={styles.experienceRating}> ⭐ {experience.rating} ({experience.reviews})</p>
            <p className={styles.experienceInfo}>{experience.description}</p>
          </div>
          <div>
            <h1 className={styles.subtitle}>Details:</h1>
            <div className={styles.experienceInfo}>
              <p> ⏱️ Duration: {experience.duration}</p>
              <p> 👩‍🍳 Includes: {experience.includes}</p>
              <p> 🏡 Location: {experience.location}</p>
              <p> 🗣️ Languages: {experience.language?.map((lang, i) => {
                const isLast = i === experience.language.length - 1
                const isSecondLast = i === experience.language.length - 2
                return (
                  <span key={i}> {" "} {lang}{!isLast && (isSecondLast ? " &" : ",")}</span>
                )
              })}</p>
              <p> ♿ Accessibility: {experience.accessibility}</p>
              <p> 👨‍👩‍👧‍👦 Recommended For: {experience.recommended?.map((recom, i) => {
                const isLast = i === experience.recommended.length - 1
                const isSecondLast = i === experience.recommended.length - 2
                return (
                  <span key={i}> {" "} {recom}{!isLast && (isSecondLast ? " &" : ",")}</span>
                )
              })}</p>
              <p> 🔁 Cancellation Policy: {experience.cancellationPolicy}</p>
              <p> ❤️ Optional Donation: {experience.optionalDonation}</p>
              <p> 👥 Group Size: {experience.groupSize}</p>
            </div>
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
          <div className={styles.picturesSection}>
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
            </div>
          </div>
          <div>
            <h1 className={styles.subtitle}>More Experiences:</h1>
            <Experiences experiences={otherExperiences} />
          </div>
        </div>
      </div>
    </div>
  )
}
