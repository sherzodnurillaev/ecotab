'use client'

import { useEffect, useState } from "react"
import { takeLocalStorage, CartItem } from "@/lib/takeLocalstorge"
import { SavePDF } from "@/ui/SavePDF"
import ClearLocal from "@/ui/ClearLocalStorge"
import Location from "@/ui/Location"
import Backfor from "@/ui/Backfor"
import { Empty } from "@/ui/Empty"

export default function BasketComponent() {

  const [products, setProducts] = useState<CartItem[]>([])

    const total = products.reduce((acc, item) => {
        return acc + item.price * Number(item.count || 0)
    }, 0)

  useEffect(() => {
    const cart = takeLocalStorage()

    setProducts(cart)
  }, [])

return (
  <div className="p-[20px]">

    <div className="absolute left-1/3 top-[25px] hidden print:block">
      <h2 className="text-4xl font-bold">Ecotab&Așk</h2>
    </div>

    <div className="flex justify-between items-center">
      <Backfor />

      <form>
        <input
          type="text"
          placeholder="Название магазина"
          className="border rounded-[5px] text-[14px] px-2 print:border-0"
        />
      </form>

      <ClearLocal />
    </div>

    {/* 👇 ВАЖНОЕ ИЗМЕНЕНИЕ */}
    {products.length === 0 ? (
      <div className="flex justify-center items-center mt-[30px]">
        <div className="text-gray-500 text-center">
            <Empty />
            <h2 className="text-[14px]">Корзина пуста</h2>
            <p className="text-[12px]">Добавьте товары, чтобы продолжить оформление</p>
        </div>
      </div>
    ) : (
      <>
        {products.map((item, i) => (
          <div
            key={item.id}
            className="grid grid-cols-17 border-b border-gray-300 py-3"
          >
            <div>
              <p className="col-span-1">{i + 1}</p>
            </div>

            <h3 className="col-span-8 border-r border-gray-300">
              {item.name}
            </h3>

            <h3 className="col-span-1"></h3>

            <div className="col-span-3">
              <input
                type="number"
                min={1}
                value={item.count}
                onChange={(e) => {
                  const value = e.target.value

                  const updatedProducts = products.map((product) =>
                    product.id === item.id
                      ? {
                          ...product,
                          count: value === "" ? "" : Number(value),
                        }
                      : product
                  )

                  setProducts(updatedProducts)

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(updatedProducts)
                  )
                }}
                className="w-[50px] border border-gray-300 rounded-md px-2 py-1 outline-none print:border-0"
              />
            </div>

            <p className="col-span-4">{item.price} sum</p>
          </div>
        ))}

        <div>
          <Location />

          <div className="flex justify-around items-center gap-3 pt-[20px]">
            <div className="print:hidden">
              <SavePDF />
            </div>

            <div className="flex gap-[15px]">
              <span className="hidden print:block">Подпись:</span>
              <div className="border-b-[0.5px] border-gray-300 w-[100px] hidden print:block" />
            </div>

            <p>Общий: {total} sum</p>
          </div>
        </div>
      </>
    )}
  </div>
)
}
