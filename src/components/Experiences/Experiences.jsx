import React from 'react'
import styles from "./Experiences.module.css"
import Link from 'next/link'


export default function Experiences({ experiences = [], horizontal = false }) {

  return (
    <div className={styles.cardList}
style={{
        flexWrap: horizontal ? "nowrap" : "wrap",
        overflowX: horizontal ? "auto" : "visible",
        gap: "15px",
        width: "100%",
        boxSizing: "border-box",
        justifyContent: horizontal ? "flex-start" : "center", 
      }}>
      {experiences.map((experience) => (
        <div key={experience.id} style={{ flex: horizontal ? "0 0 auto" : "unset" }}>
          <div className={styles.card}>
            <Link className={styles.cardLink} href={{
              pathname: 'DetailPage',
              query: {
                id: experience.id
              }
            }}>
              <div className={styles.cardDetails}>
                <div className={styles.cardDetailsTop}>
                  <img src={experience.img} alt={experience.title} className={styles.cardImage} />
                  <div className={styles.cardCategorieSection}>
                    {experience.category.map((c, index) => (
                      <span key={index} className={styles.cardCategorie} >{c}</span>
                    ))} </div>
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
