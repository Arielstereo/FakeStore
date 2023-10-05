import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { Badge } from '@mui/material'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export default function Navbar () {
  const { getTotalQuantity } = useContext(CartContext)
  return (
    <AppBar sx={{ background: 'yellow' }}>
      <Toolbar>
        <Typography
          variant='h5'
          sx={{ flexGrow: 1, display: 'block', textAlign: 'center', color: 'black', padding: 3 }}
        >
          My Fake Store
        </Typography>

        <Link to='/cart'>
          <Badge badgeContent={getTotalQuantity()} color='primary'>
            <ShoppingCartIcon sx={{ color: 'black', fontSize: 28 }} />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>

  )
}
