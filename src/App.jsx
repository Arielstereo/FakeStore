import { useContext } from 'react'
import './App.css'
import Filters from './components/Filters'
// import products from './mocks/products.json'
import Products from './components/Products'
import { ProductContext } from './context/ProductsContext'
import { useFilters } from './hooks/useFilters'
import Navbar from './components/Navbar'
import { Box, Grid } from '@mui/material'

// https://fakestoreapi.com/products

const App = () => {
  const { setFilters, filteredProducts } = useFilters()
  const { products } = useContext(ProductContext)

  const filterProducts = filteredProducts(products)

  return (

    <Box>
      <Navbar />
      <Grid container direction={{ xs: 'column', lg: 'row' }}>
        <Grid item xs={12} md={2}>
          <Filters onChange={setFilters} />
        </Grid>
        <Grid item xs={12} md={10}>
          <Products products={filterProducts} />
        </Grid>
      </Grid>
    </Box>

  )
}

export default App
