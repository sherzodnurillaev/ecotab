'use client'

import { useEffect } from 'react'

export default function TgDebug() {
  useEffect(() => {
    console.log('Telegram:', window.Telegram?.WebApp)
  }, [])

  return null
}