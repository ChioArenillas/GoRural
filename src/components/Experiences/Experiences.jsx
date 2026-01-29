import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./Experiences.module.css"
import { getExperiences } from '@/pages/api/userFecht'
import Link from 'next/link'
import { categories, types, languages, recommendedFor } from '@/pages/api/filters'


export default function Experiences({ excludeId = null, limit = null }) {

  const [experiences, setExperiences] = useState([])
  const [filteredExperiencies, setFilteredExperiences] = useState([])

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")
  const [language, setLanguage] = useState("")
  const [recommended, setRecommended] = useState("")


  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let experiencesAux = getExperiences()

    if (excludeId) {
      experiencesAux = experiencesAux.filter(
        exp => exp.id !== Number(excludeId)
      )
    }
    if (limit) {
      experiencesAux = experiencesAux.slice(0, limit)
    }
    setExperiences(experiencesAux)
  }, [excludeId, limit])


  useEffect(() => {
    let result = [...experiences]

    if (search) {
      result = result.filter(exp =>
        exp.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (category) {
      result = result.filter(exp =>
        exp.category.includes(category)
      )
    }
    if (type) {
      result = result.filter(exp =>
        exp.type.includes(type)
      )
    }
    if (language) {
      result = result.filter(exp =>
        exp.language.includes(language)
      )
    }
    if (recommended) {
      result = result.filter(exp =>
        exp.recommended.includes(recommended)
      )
    }
    setFilteredExperiences(result)
  }, [search, category, type, language, recommended, experiences])

  return (
    <div>
      <div className={styles.filtersSection}>
        <div className={styles.search}>
          <input type='text' placeholder='Search experiences...' value={search} onChange={e => setSearch(e.target.value)} />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch("")}>X</button>
          )}</div>

        <div className={styles.filters}>

          <div className={styles.filterItem}>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}</select>
            {category && (<button className={styles.clearBtn} onClick={() => setCategory("")}>X</button>)}
          </div>

          <div className={styles.filterItem}>
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="">Types</option>
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}</select>
            {type && (<button className={styles.clearBtn} onClick={() => setType("")}>X</button>)}
          </div>

          <div className={styles.filterItem}>
            <select value={language} onChange={e => setLanguage(e.target.value)}>
              <option value="">Languages</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}</select>
            {language && (<button className={styles.clearBtn} onClick={() => setLanguage("")}>X</button>)}
          </div>

          <div className={styles.filterItem}>
            <select value={recommended} onChange={e => setRecommended(e.target.value)}>
              <option value="">Recommended For</option>
              {recommendedFor.map((recommended, index) => (
                <option key={index} value={recommended}>{recommended}</option>
              ))}</select>
            {recommended && (<button className={styles.clearBtn} onClick={() => setRecommended("")}>X</button>)}
          </div>
        </div>
      </div>

      <div className={styles.cardList}>
        {filteredExperiencies.map((experience) => (
          <div key={experience.id}>
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
    </div>
  )
}
