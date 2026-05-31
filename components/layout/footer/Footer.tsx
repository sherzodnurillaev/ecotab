'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {

  const navigate = useRouter()
  const pathname = usePathname()

  if (pathname === "/Basket") {
    return null
  }

  return (
    <div
      className="fixed bottom-[35px] right-[35px] w-[50px] h-[50px] rounded-full bg-red-600 print:hidden"
      onClick={() => navigate.push('/Basket')}
    >
      <Image
        src={"/backet.png"}
        width={50}
        height={50}
        alt="backet"
      />
    </div>
  )
}