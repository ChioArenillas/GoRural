import FAQsPage from '@/pages/FAQsPage'
import React, { useEffect, useState } from 'react'
import { getFAQs } from '@/pages/api/userFecht'
import styles from "@/components/FAQs/FAQs.module.css"

export default function Faqs() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        let faqsAux = getFAQs()
        setFaqs(faqsAux)
    }, [])

  return (
    <div className={styles.component}>
        {faqs.map((faq, index) => (
            <div key={index}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
            </div>
        ))}
    </div>
  )
}
