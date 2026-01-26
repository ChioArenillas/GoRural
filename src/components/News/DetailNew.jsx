import styles from "./News.module.css"
import { useRouter } from 'next/router'
import { getNewsById } from "@/pages/api/userFecht"
import React from 'react'
import News from "./News"

export default function DetailNew() {

    const router = useRouter()
    const { id } = router.query

    const item = getNewsById(id)
    if (!item) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.component}>
            <div className={styles.details}>
                <img className={styles.itemImage} src={item.image} alt={item.title} />
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.itemInfo}>{item.description}</p>
            </div>
            <div>
                <h1 className={styles.subtitle}>Others:</h1>
                <News excludeId={id} limit={5} />
            </div>
        </div>
    )
}
