'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [step, setStep] = useState<1 | 2>(1)

  const router = useRouter()

  // отправка кода
  const [loading, setLoading] = useState(false)

    const sendCode = async () => {
        if (loading) return

        setLoading(true)

        try {
            const { error } = await supabase.auth.signInWithOtp({
            email,
            })

            if (error) {
            console.log(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

  // проверка кода
  const verifyCode = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "sms",
    })

    if (error) {
      console.log(error.message)
      return
    }

    const user = data.user

    if (!user) return

    // ищем роль в таблице users
    const { data: profile } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single()

    if (!profile) return

    // редирект по роли
    if (profile.role === "super_admin") {
      router.push("/admin")
    }

    if (profile.role === "agent") {
      router.push("/admin")
    }

    if (profile.role === "user") {
      router.push("/")
    }
  }

  return (
    <div className="p-10">
      {step === 1 && (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
          />

            <button disabled={loading} onClick={sendCode}>
                {loading ? "Sending..." : "Send code"}
            </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border p-2"
          />

          <button onClick={verifyCode}>
            Verify
          </button>
        </>
      )}
    </div>
  )
}