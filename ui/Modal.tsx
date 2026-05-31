'use client'

import Image from "next/image"

type ModalProps = {
  imag: string
  show: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShowModal = ({imag, show}: ModalProps) => {
    return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/85"
      onClick={() => show(false)}
    >
      <div className="flex items-center justify-center h-screen px-[10px]">
        <Image
          src={imag}
          width={600}
          height={600}
          alt="photo"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}
