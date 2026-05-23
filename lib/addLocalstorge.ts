import type { Product } from "@/types/prodect"

type CartItem = {
    id: number
    img: string
    name: string
    price: number
    count: number
}

export const addToCart = (product: Product) => {

    const cartData = localStorage.getItem('cart')

    console.log(cartData)

    const cart = cartData
        ? JSON.parse(cartData)
        : []

    const existingItem = cart.find(
        (item: any) => item.id === product.id
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

    localStorage.setItem(
        'cart',
        JSON.stringify(cart)
    )
}