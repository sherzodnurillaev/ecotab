'use client'

import { getCategories } from "@/lib/categories"
import { Categories } from "@/types/category"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Universal() {

    const [categories, setCategories] = useState<Categories[]>([])
    const navigate = useRouter()

    useEffect(() => {

        const fetchCategories = async () => {
            try {

                const data = await getCategories()

                setCategories(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchCategories()

    }, [])

    const setCategory = (value: string) => {
        navigate.push(`/?category=${value}`)
    }

    return(
        <div className="flex flex-wrap justify-between gap-[15px] items-center p-[25px]">
            {categories
                .filter(item =>
                    item.type !== "ask" &&
                    item.type !== "ecotab"
                ).map((item) => (
                <div key={item.id} className="relative w-[100px] h-[150px]"
                onClick={() => setCategory(item.type)}>
                    <Image src={item.img} width={100} height={100} alt={item.text} />
                    <div className="absolute bottom-0 left-1/4">
                        <h3 className="text-[18px]">{item.text}</h3>
                    </div>
                </div>
            ))}

        </div>
    )
}