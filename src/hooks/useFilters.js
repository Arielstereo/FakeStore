import { useContext } from 'react'
import { ProductContext } from '../context/ProductsContext'

export function useFilters () {
  const { filters, setFilters } = useContext(ProductContext)

  const filteredProducts = (products) => products.filter(product => {
    return product.price >= filters.minPrice && (
      filters.category === 'all' || product.category === filters.category
    )
  })

  return { setFilters, filteredProducts }
}
