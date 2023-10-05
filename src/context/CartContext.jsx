/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const ProductInCart = cart.find(item => item.id === product.id)
    if (!ProductInCart) {
      setCart([...cart, { ...product, quantity: 1 }])
    } else {
      const updateCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCart(updateCart)
    }
  }

  const removeFromCart = (product) => {
    const updatedCart = cart.map(item => {
      if (item.id === product.id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return null
        }
      }
      return item
    })

    const filteredCart = updatedCart.filter(item => item !== null)
    setCart(filteredCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalBuy = () => {
    const subTotals = cart.map(item => item.price * item.quantity)
    const total = subTotals.reduce((a, b) => a + b, 0)
    return total
  }

  const getTotalQuantity = () => {
    const quantity = cart.map(item => item.quantity)
    const totalQuantity = quantity.reduce((a, b) => a + b, 0)
    return totalQuantity
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart,
      getTotalBuy,
      getTotalQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
