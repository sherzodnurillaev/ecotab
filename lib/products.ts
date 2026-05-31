import { supabase } from './supabase'

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', true)

  if (error) {
    throw new Error(error.message)
  }

  return data
}