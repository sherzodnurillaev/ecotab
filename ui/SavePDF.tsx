'use client'

export const SavePDF = () => {

    return (
        <button
            onClick={() => window.print()}
            className="px-5 py-2 rounded-xl bg-black text-white"
            >
                Сохранить
        </button>
    )
}
