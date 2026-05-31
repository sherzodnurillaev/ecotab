"use client"

export default function ClearLocal() {

    const handleClear = () => {
        localStorage.clear()
        window.location.reload()
    }

    return(
        <div>
            <button
                onClick={handleClear}
                className="bg-red-600 rounded-2xl px-[15px] py-[4px] text-white print:hidden"
            >
                Удалить
            </button>
        </div>
    )
}