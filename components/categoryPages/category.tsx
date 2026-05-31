'use client'

import type { Product } from "@/types/prodect"
import Image from "next/image"
import { addToCart, decreaseCount, getCart, increaseCount } from "@/lib/addLocalstorge"
import { Categories } from "@/types/category"
import { useEffect, useState } from "react"
import { CartItem } from "@/lib/takeLocalstorge"
import Backfor from "@/ui/Backfor"
import { ShowModal } from "@/ui/Modal"
import { Empty } from "@/ui/Empty"

type CategoryProps = {
  category: string | null
  products: Product[]
  categories: Categories[]
}

export default function Category({ category, products, categories }: CategoryProps) {
  const [imag, setImag] = useState('')
  const [show, setShow] = useState(false)

  const filteredByCategory = category
    ? products.filter(p => p.type === category)
    : products;

    const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  const handleAdd = (product: Product) => {
    addToCart(product)
    setCart(getCart())
  }

  const handleIncrease = (id: number) => {
    increaseCount(id)
    setCart(getCart())
  }

  const handleDecrease = (id: number) => {
    decreaseCount(id)
    setCart(getCart())
  }

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }


  return (
    <div>
      <div className="fixed top-[100px] left-[20px]">
        <Backfor />
      </div>
      <h2 className="text-violet-600 text-center text-[26px] font-bold italic my-[10px]">
        {category == 'melochi'
          ? 'Другие товары'
          : category
            ? capitalize(category)
            : ''}
      </h2>

      {filteredByCategory.length === 0 ? (
        <div className="text-center text-[12px] text-gray-500">
          <Empty />
          Товар не найден. Попробуйте изменить запрос.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-[20px] gap-7">
          {filteredByCategory.map(item => {

          const cartItem = cart.find(
            product => product.id === item.id
          )

          const count = cartItem?.count || 0

  return (
            <div key={item.id} className="max-w-[200px]">
              <Image
                onClick={() => {
                  setImag(item.image)
                  setShow(true)
                }}
                className="h-[200px] w-[200px] object-cover rounded-2xl"
                src={item.image}
                width={300}
                height={300}
                alt={item.name}
              />

              <h2>{item.name}</h2>
              <p>{item.price} sum</p>

              {/* <div
                className="bg-green-600 py-1 text-white rounded-2xl text-center"
                onClick={() => addToCart(item)}
              >
                Add+
              </div> */}
              <div className="">
                {count === 0 ? (
                  <div onClick={() => handleAdd(item)} className="text-center bg-green-400 text-[#fff] rounded-b-2xl py-[3px] w-[100%]">
                    Add+
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <button className="bg-red-500 px-[17px] rounded-[4px] text-[#fff]"
                    onClick={() => handleDecrease(item.id)}>
                      -1
                    </button>

                    <span>{count}</span>

                    <button className="bg-green-400 px-[17px] rounded-[4px] text-[#fff]"
                    onClick={() => handleIncrease(item.id)}>
                      +1
                    </button>
                  </div>
                )}
              </div>
              </div>
            )
          })}
        </div>
      )}
        {show && <ShowModal imag={imag} show={setShow} />}
    </div>
  )
}
