import FAQsPage from '@/pages/FAQsPage'
import React, { useEffect, useState } from 'react'
import { FAQs } from '@/pages/api/dbFAQs'
import { getFAQs } from '@/pages/api/userFecht'

export default function Faqs() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        let faqsAux = getFAQs()
        setFaqs(faqsAux)
    }, [])

  return (
    <div>
        {faqs.map((faq, index) => (
            <div key={index}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
            </div>
        ))}
    </div>
  )
}
