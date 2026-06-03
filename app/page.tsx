import { Suspense } from "react"
import CategoryPages from "@/components/mainPage/categoryPages"
import { getCategories } from "@/lib/categories"
import { getProducts } from "@/lib/products"

export default async function Home() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <main className="pb-[20px]">
      <Suspense fallback={<div>Loading...</div>}>
      <h1>new deploy</h1>
        <CategoryPages products={products} categories={categories} />
      </Suspense>
    </main>
  )
}