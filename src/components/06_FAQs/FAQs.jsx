import FAQsPage from '@/pages/FAQsPage'
import React, { useEffect, useState } from 'react'
import { getFAQs } from '@/pages/api/userFecht'
import styles from "@/components/06_FAQs/FAQs.module.css"

export default function Faqs() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        let faqsAux = getFAQs()
        setFaqs(faqsAux)
    }, [])

  return (
    <div className={styles.faqsContainer}>
        {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
                <h2 className={styles.faqQuestion}>{faq.question}</h2>
                <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
        ))}
    </div>
  )
}