import { supabase } from './supabase'

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', true)

  if (error) {
    console.log('Supabase error:', error.message)
    return []
  }

  return data ?? []
}