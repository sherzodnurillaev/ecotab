import { supabase } from './supabase'

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')

  if (error) {
    console.log('Supabase categories error:', error.message)
    return []
  }

  return data ?? []
}
