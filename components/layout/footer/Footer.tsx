'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
    const navigate = useRouter()
    
    return(
        <div className="fixed bottom-[35px] right-[35px] w-[50px] h-[50px] rounded-[50%] bg-red-600"
        onClick={() => navigate.push('/Basket')}>
            <Image src={"/backet.png"} width={50} height={50} alt="backet" />
        </div>
    )
}
