/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from 'react'

export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
export function ProductProvider ({ children }) {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({ minPrice: 0, category: 'all' })

  const API = import.meta.env.VITE_URL

  useEffect(() => {
    fetch(`${API}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      filters,
      setFilters
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}
