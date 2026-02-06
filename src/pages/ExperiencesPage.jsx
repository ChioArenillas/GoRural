import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from "@/components/03_Experiences/Experiences.module.css"
import { getExperiences } from './api/userFecht'
import { useState } from 'react'
import Experiences from '@/components/03_Experiences/Experiences'
import { categories, languages, recommendedFor } from './api/filters'


export default function ExperiencesPage({ initialRecommended = "" }) {

  const pageTitle = "EXPERIENCES"
  const pageText = "Discover hands-on rural experiences designed to connect you with local traditions, nature, and people. From outdoor adventures to cultural workshops and farm activities, every experience is carefully selected to be authentic, sustainable, and meaningful. By booking an experience, you are not only creating memories, but also directly supporting small rural communities and local hosts."

  const [experiences, setExperiences] = useState([])
  const [filteredExperiencies, setFilteredExperiences] = useState([])

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [language, setLanguage] = useState("")
  const [recommended, setRecommended] = useState(initialRecommended)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    setExperiences(getExperiences())
  }, [])


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
  }, [search, category, language, recommended, experiences])


  return (
    <div>
      <div className={styles.hero} >
        <img className={styles.heroimg} src="/assets/Hero/HeroExperiences.jpg" alt="HeroImagen" />
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>{pageTitle}</h2>
        </div>
      </div>
      <h3 className={styles.pageText}>{pageText}</h3>
      <div className={styles.filtersSection}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search experiences..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")}>X</button>
          )}
        </div>

        <div className={styles.filters}>

          <div className={styles.filterItem}>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Categories</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
            {category && <span className={styles.clearBtn} onClick={() => setCategory("")}>X</span>}
          </div>

          <div className={styles.filterItem}>
            <select value={language} onChange={e => setLanguage(e.target.value)}>
              <option value="">Languages</option>
              {languages.map((l, i) => (
                <option key={i} value={l}>{l}</option>
              ))}
            </select>
            {language && <span className={styles.clearBtn} onClick={() => setLanguage("")}>X</span>}
          </div>

          <div className={styles.filterItem}>
            <select value={recommended} onChange={e => setRecommended(e.target.value)}>
              <option value="">Recommended For</option>
              {recommendedFor.map((r, i) => (
                <option key={i} value={r}>{r}</option>
              ))}
            </select>
            {recommended && <span className={styles.clearBtn} onClick={() => setRecommended("")}>X</span>}
          </div>
        </div>
      </div>
      <div >
        <Experiences experiences={filteredExperiencies} />
      </div>
    </div>
  )
}
