import { getOrders } from "@/lib/admin/orders"

export default async function OrdersPage() {
  const orders = await getOrders()

  return (
    <div>
      <h1>Orders</h1>

      {orders.map((o) => (
        <div key={o.id}>
          {o.id} - {o.total_price}
        </div>
      ))}
    </div>
  )
}