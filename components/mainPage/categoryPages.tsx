'use client'

import { useSearchParams } from "next/navigation"
import CategoryMain from "./categoryForMain"
import Category from "../categoryPages/category"

import type { Product } from "@/types/prodect"

type Props = {
    products: Product[]
}

export default function CategoryPages ({ products }: Props) {
    console.log(products);
    
    const searchParams = useSearchParams()

    const category = searchParams.get('category')

    const pages = {
        ask: <Category category={category} products={products} />,
        ecotab: <Category category={category} products={products} />,
        another: <Category category={category} products={products} />
    }

    return (
        <div className="">
            {
                category ?
                pages[category as keyof typeof pages]
                : <CategoryMain />
            }
        </div>
    )
}
