import { experiences } from "./db";
import { FAQs } from "./dbFAQs";
import { news } from "./dbNews";
import { locations } from "./dbLocations"

export const getExperiences = () => {
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

export const getNews = () => {
    return news.map(item => {
        return {
            id: item.id,
            img: item.image,
            title: item.title,
            description: item.description,
        }
    })
}
export const getNewsById = (idParam) => {
    let newsAux = news.find(item => item.id == idParam)
    return newsAux
}
export const getLocations = () => {
    return locations.map(location => {
        return {
            id: location.id,
            title: location.name,
            img: location.image,
            name: location.name,
        }
    })
}
export const getLocationsById = (idParam) => {
    let locationAux = locations.find(location => location.id == idParam)
    return locationAux
}
export const getExperiencesByLocation = (locationName) => {
    return experiences.filter(exp =>
        exp.locationId.includes(locationName)
    )

}
