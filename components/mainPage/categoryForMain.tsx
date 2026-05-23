'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CategoryMain() {
    const navigate = useRouter()

    const category = [
        {
            id: 1,
            type: "ecotab",
            text: "Eco Tab",
            img: "/ecotab.jpeg"
        },
        {
            id: 2,
            type: "ask",
            text: "Aşk",
            img: "/ask.png"
        },
        {
            id: 3,
            type: "another",
            text: "Другое",
            img: null
        }
    ]

    const setCategory = (value: string) => {
        navigate.push(`?category=${value}`)
    }
    
    return(
        <div className="flex items-center justify-center flex-col gap-[40px] pt-[50px]">
            {
                category.map((arr, i) => (
                    <div className="" key={arr.id}>
                        {
                            arr.img != null ?
                            <div className="" 
                            onClick={() => setCategory(arr.type)}>
                                <Image src={arr.img } width={100} height={100} alt={arr.text} className="rounded-[8px]" />
                                <h2 className="text-center">{arr.text}</h2>
                            </div>
                        : 
                        <h2
                        onClick={() => setCategory(arr.type)}
                        className="text-center bg-violet-700 text-white px-[50px] py-1 font-bold text-[20px] rounded-[8px] ">{arr.text}</h2>
                        }
                    </div>
                ))
            }
        </div>
    )
}
