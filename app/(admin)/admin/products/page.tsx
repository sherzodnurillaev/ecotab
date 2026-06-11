import { getProducts } from "@/lib/products"

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  )
}