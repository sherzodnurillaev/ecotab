"use client"

import { useState } from "react"

export default function Location() {

    const [location, setLocation] = useState({
        lat: 0,
        lng: 0
    })

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {

            const lat = position.coords.latitude
            const lng = position.coords.longitude

            setLocation({
                lat,
                lng
            })
        })
    }

    return (
        <div className="">
            <div className={`${location.lat >= 1 ? 'block' : 'hidden'}`}>
                <p>Lat: {location.lat}</p>
                <p>Lon: {location.lng}</p>

            </div>
                <button onClick={getLocation}
                className={`bg-green-600 rounded-[4px] text-white text-[14px] print:hidden px-2 py-1 mt-[12px] ${location.lat >= 1 ? 'hidden' : 'block'}`}>
                    Получить адрес
                </button>
        </div>
    )
}