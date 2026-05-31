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
                className="bg-green-600 rounded-2xl px-[25px] py-[4px] text-white print:hidden"
            >
                Clear
            </button>
        </div>
    )
}