import { experiences } from "./db";
import { FAQs } from "./dbFAQs";

export const getExperiences = () =>{
    return experiences.map(experience => {
        return {
            id: experience.id,
            img: experience.image,
            title: experience.title,
            category: experience.category,
            city: experience.city,
            description: experience.description,
            duration: experience.duration,
            price: experience.price,
            currency: experience.currency,
            rating: experience.rating,
            reviews: experience.reviews,
            type: experience.type,
        }
    })
}

export const getExperiencesById = (idParam) => {
    let experienceAux = experiences.find(experience => experience.id == idParam)
    return experienceAux
}

export const getFAQs = () => {
    return FAQs.map(faq => {
        return {
            question: faq.question,
            answer: faq.answer,
        }
    })
}