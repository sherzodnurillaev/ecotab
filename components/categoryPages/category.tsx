'use client'
import type { Product } from "@/types/prodect"
import Image from "next/image"

import { addToCart } from "@/lib/addLocalstorge"
import { useEffect, useState } from "react"

type CategoryProps = {
    category: string | null
    products: Product[]
}

export default function Category({ category, products }: CategoryProps) {
    const main = category
    const prod = products

    const filtered = category
        ? prod.filter(p => p.type === category)
        : prod
        

    return(
        <div className="">
            <h1 className="text-violet-600 text-center text-[26px]">{main}</h1>
            <div className="grid grid-cols-2 px-[20px] gap-7">
                {
                    filtered.map(item => (
                        <div key={item.id}>
                            <Image src={item.image} width={300} height={300} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <div className="bg-green-600 py-1 text-white rounded-2xl text-center" 
                            onClick={() => addToCart(item)}>
                                <p>Add+</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
