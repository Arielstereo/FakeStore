/* eslint-disable react-hooks/exhaustive-deps */
import { HomeRounded } from '@mui/icons-material'
import { Box, CardMedia, Grid, Link, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [product, setProduct] = useState({})

  const param = useParams()

  // const API = import.meta.env.VITE_URL

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box sx={{ maxWidth: 400, mt: 12, mx: 'auto' }}>
          <CardMedia
            component='img'
            image={product.image}
            title={product.title}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ minWidth: 300, mt: 12, mx: 'auto', p: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography sx={{ fontSize: 32 }}>{product.title}</Typography>
          <Typography sx={{ fontSize: 16 }}>{product.description}</Typography>
          <Typography sx={{ fontSize: 32, fontWeight: 'bold', margin: 'auto' }}>$ {product.price}</Typography>
          <Link sx={{ position: 'absolute', right: 125, top: 32 }} href='/'>
            <HomeRounded sx={{ fontSize: 32 }} />
          </Link>
        </Box>
      </Grid>

    </Grid>
  )
}

export default Details
