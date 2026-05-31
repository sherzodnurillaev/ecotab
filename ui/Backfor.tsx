'use client'

import { useRouter } from "next/navigation"

export default function Backfor() {
    const navigate = useRouter()
    return(
        <div className="print:hidden">
            <h2 onClick={() => navigate.back()} className="bg-violet-300 rounded-2xl rounded-br-[0px] px-[10px] py-[3px] text-[#fff]">Назад</h2>
        </div>
    )
}
