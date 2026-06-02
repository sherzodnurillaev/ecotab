import { Suspense } from "react"
import CategoryPages from "@/components/mainPage/categoryPages"
import { getCategories } from "@/lib/categories"
import { getProducts } from "@/lib/products"
import TgDebug from "@/components/forTg/telegram"

export default async function Home() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <main className="pb-[20px]">
      <TgDebug />
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryPages products={products} categories={categories} />
      </Suspense>
    </main>
  )
}