'use client'

export const SavePDF = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="px-5 py-2 rounded-xl bg-black text-white"
    >
      Сохранить
    </button>
  )
}