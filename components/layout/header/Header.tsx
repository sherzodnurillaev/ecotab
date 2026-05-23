'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {

    const navigate = useRouter()
    
    return (
        <div className="text-center bg-black pt-[10px] pb-1 text-white w-full rounded-b-[20px] flex justify-between items-center gap-5 px-[15px]">
            <div className="min-w-[100px]" 
            onClick={() => navigate.push('/')} >
                <Image src="/logo/ask.png" width={100} height={50} alt="logo" />
            </div>
            <div className="relative">
                <form action="" className="">
                    <input type="text" placeholder="search..." className="bg-amber-50 rounded-2xl text-black px-[10px] py-[5px]" />
                    <Image src="/search-521.png" width={20} height={20} alt="search" className="absolute top-1/4 right-1/18 bg-amber-50" />
                </form>
            </div>
        </div>
    )
}
