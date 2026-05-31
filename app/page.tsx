import CategoryPages from "@/components/mainPage/categoryPages";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="">
      <main className="pb-[20px]">
        <CategoryPages products={products} categories={categories} />
      </main>
    </div>
  );
}
