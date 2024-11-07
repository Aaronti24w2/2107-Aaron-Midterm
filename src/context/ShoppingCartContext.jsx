import React, { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId))
    }

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <ShoppingCartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, totalCost }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

export default ShoppingCartProvider
