import { supabase } from "../supabase"

export async function getUsers() {
  const { data, error } = await supabase
    .from("users")
    .select("*")

  if (error) {
    console.log("Supabase error:", error.message)
    return []
  }

  return data
}

export async function getClients() {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("role", "user")

  if (error) return []

  return data
}

export async function getAgents() {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("role", "agent")

  if (error) return []

  return data
}

export async function getMyClients(agentId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("agent_id", agentId)

  if (error) return []

  return data
}
