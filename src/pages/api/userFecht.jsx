import { experiences } from "./db";

export const getExperiences = () =>{
    return experiences.map(experience => {
        return {
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