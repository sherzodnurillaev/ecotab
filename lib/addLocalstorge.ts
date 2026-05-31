import type { Product } from "@/types/prodect"

type CartItem = {
    id: number
    img: string
    name: string
    price: number
    count: number
}

export const getCart = (): CartItem[] => {
    const data = localStorage.getItem('cart')

    return data ? JSON.parse(data) : []
}

export const addToCart = (product: Product) => {

    const cart = getCart()

    const existingItem = cart.find(
        item => item.id === product.id
    )

    if (existingItem) {
        existingItem.count += 1
    } else {
        cart.push({
            id: product.id,
            img: product.image,
            name: product.name,
            price: product.price,
            count: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const increaseCount = (id: number) => {
    const cart = getCart()

    const item = cart.find(
        product => product.id === id
    )

    if (item) {
        item.count += 1
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const decreaseCount = (id: number) => {
    const cart = getCart()

    const item = cart.find(
        product => product.id === id
    )

    if (!item) return

    item.count -= 1

    const updatedCart = cart.filter(
        product => product.count > 0
    )

    localStorage.setItem(
        'cart',
        JSON.stringify(updatedCart)
    )
}
