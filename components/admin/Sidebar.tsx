'use client'

import Link from "next/link"

export default function Sidebar({ role = "user" }: { role?: string }) {
  const menu =
    role === "super_admin"
      ? [
          "dashboard",
          "orders",
          "products",
          "categories",
          "users",
          "agents",
          "accounting",
        ]
      : role === "agent"
      ? ["dashboard", "my_orders", "my_clients"]
      : ["dashboard"]

  return (
    <div className="p-4">
      {menu.map((item) => (
        <Link
          key={item}
          href={`/admin/${item}`}
          className="block py-2"
        >
          {item}
        </Link>
      ))}
    </div>
  )
}