export interface Film {
    film_id: number
    title: string
    description: string
    release_year: number
    language_id: number
    language_Name?: string
    original_language_id?: number
    original_Language_Name?: string
    rental_duration: number
    rental_rate: number
    length: number
    replacement_cost: number
    rating: string
    special_features: string
    last_update: Date
}
