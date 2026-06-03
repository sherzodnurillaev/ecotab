'use client'

import { useSearchParams } from "next/navigation"
import CategoryMain from "./categoryForMain"
import Category from "../categoryPages/category"

import type { Product } from "@/types/prodect"
import { Categories } from "@/types/category"

type Props = {
  products: Product[]
  categories: Categories[]
}

export default function CategoryPagesClient({
  products,
  categories
}: Props) {

  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const search = searchParams.get('search')

  const filteredByCategory = category
    ? products.filter(p => p.type === category)
    : products

  const filteredBySearch = search
    ? filteredByCategory.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : filteredByCategory

  return (
    <div>
      {!category && !search ? (
        <CategoryMain />
      ) : (
        <Category
          category={category}
          products={filteredBySearch}
          categories={categories}
        />
      )}
    </div>
  )
}