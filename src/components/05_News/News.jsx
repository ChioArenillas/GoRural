import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./News.module.css";
import { getNews } from '@/pages/api/userFecht';
import Link from 'next/link';


export default function News({excludedId = null, limit = null}) {

  const [news, setNews] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    let newsAux = getNews()

    if (excludedId){
      newsAux = newsAux.filter(
        item => item.id !== Number(excludedId)
      )
    }
    if (limit) {
      newsAux = newsAux.slice(0, limit)
    }
    setNews(newsAux)
  }, [excludedId, limit])

  return (

    <div className={styles.cardList}>
      {news.map((item) => (
        <div key={item.id}>
          <div className={styles.card}>
            <div className={styles.cardDetails}>
              <div className={styles.cardDetailsTop}>
                <img src={item.img} alt={item.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div >
              <div className={styles.cardDetailsBottom}>
                <button className={styles.smallBtn}>
                  <Link className={styles.cardLink} href={{
                    pathname: 'DetailNewsPage',  
                    query: {
                      id: item.id
                    }
                  }}>Read more</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
