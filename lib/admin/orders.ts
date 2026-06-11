import { supabase } from "../supabase"

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")

  if (error) return []
  return data
}