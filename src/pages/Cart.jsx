import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from '@mui/material/Button'
import { Avatar, Box, Divider, IconButton, Link, List, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { HomeRounded } from '@mui/icons-material'

const Cart = () => {
  const { cart, clearCart, removeFromCart, getTotalBuy } =
    useContext(CartContext)

  return (

    <Box sx={{ width: '100%', height: 800, marginTop: 15, display: 'flex', justifyContent: 'center' }}>
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {cart.length > 0
          ? (
              cart.map((cart) => (
                <Box sx={{ maxWidth: 800 }} key={cart.id}>
                  <ListItem sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                    <Avatar sx={{ minWidth: 80, minHeight: 80 }} src={cart.image} alt={cart.title} />
                    <Typography sx={{ fontSize: 18 }}>x{cart.quantity}</Typography>
                    <Typography sx={{ fontSize: 18, color: 'green' }}>${cart.price}</Typography>

                    <IconButton
                      aria-label='delete'
                      onClick={() => removeFromCart(cart)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </Box>
              ))
            )
          : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
              <Typography sx={{ fontSize: 20, textAlign: 'center', marginTop: 25 }}>Empty cart</Typography>
              <Link href='/'>Back to home</Link>
            </Box>
            )}
        {cart.length > 0 && (
          <Box sx={{ display: 'flex', gap: 6, margin: 'auto' }}>
            <Button
              variant='contained'
              color='error'
              startIcon={<DeleteIcon />}
              onClick={() => clearCart()}
            >
              Clear Cart
            </Button>
            <Typography sx={{ fontSize: 22, textAlign: 'center' }}>${getTotalBuy().toFixed(2)}</Typography>
          </Box>
        )}
      </List>
      <Link sx={{ position: 'absolute', right: 100, top: 32 }} href='/'>
        <HomeRounded sx={{ fontSize: 32 }} />
      </Link>
    </Box>

  )
}

export default Cart
