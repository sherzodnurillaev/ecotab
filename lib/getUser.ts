import { supabase } from "./supabase"

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single()

  return data
}