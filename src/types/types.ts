export interface user {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface product {
    title: string
    thumbnail: string
    publisher: string
    price: string
    description: string
    documention: string
    images1: string,
    images2: string,
    images3: string,
    images4: string,
    video: string
}

export interface order {
    userId: string
    product: product
    timeStamp: string
}