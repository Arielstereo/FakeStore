import ReactDOM from 'react-dom/client'
import { ProductProvider } from './context/ProductsContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './pages/Details.jsx'
import Cart from './pages/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <Details />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ProductProvider>

)
