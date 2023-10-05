/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
  Link,
  Box
} from '@mui/material'

const Products = ({ products }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, my: 16, justifyContent: 'center' }}>
      {products.map((product) => (
        <Card sx={{ maxWidth: 400, padding: 2, maxHeight: 500 }} key={product.id}>
          <Link underline='none' href={`/product/${product.id}`}>
            <Typography sx={{ fontSize: 18 }}>{product.title}</Typography>
            <Typography sx={{ fontSize: 12, marginTop: 2 }}>{product.category}</Typography>
            <CardMedia
              sx={{ minWidth: 100, minHeight: 200, m: 4 }}
              image={product.image}
              title={product.title}
            />
            <Box sx={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <Rating
                name='read-only'
                value={product.rating.rate <= 3 ? 2 : 4}
              />
              <Typography sx={{ fontSize: 22, fontWeight: 'bold' }}>$ {product.price}</Typography>
            </Box>
          </Link>
          <Button
            sx={{ my: 6 }}
            variant='contained'
            color='success'
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Card>
      ))}
    </Box>
  )
}

export default Products
