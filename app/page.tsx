import CategoryPages from "@/components/mainPage/categoryPages";
import products from "@/data/products.json"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <CategoryPages products={products} />
      </main>
    </div>
  );
}
