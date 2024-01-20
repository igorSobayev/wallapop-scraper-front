export type User = {
    username: string
    email: string
    avatar: string
    name: string
    surname: string
    description: string
    id: string
    creationDate: date
    avgRating: number
    recipesNumber: string
}

export type EditUserParams = {
    name: string
    surname: string
    description: string
    id: string
    newAvatar: FormData | undefined
    avatar?: string
}

export type Track = {
    user: string
    tag: string
    platform: string

    // Product info
    title: string
    views: number
    favs: number
    price: number
    oldPrice: number
    delivery: boolean
    deliveryInfo: string
    location: string
    description: string
    link: string
    sold: boolean
    reserved: boolean
    updateDate: date
    creationDate: date
}