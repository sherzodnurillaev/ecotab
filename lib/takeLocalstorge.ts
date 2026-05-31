export type CartItem = {
  id: number
  name: string
  price: number
  count: number | string
}

export const takeLocalStorage = (): CartItem[] => {
  const data = localStorage.getItem("cart");

  return data ? JSON.parse(data) : [];
}