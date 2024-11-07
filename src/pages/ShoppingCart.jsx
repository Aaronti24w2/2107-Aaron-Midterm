import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

const ShoppingCart = () => {
    const { cart, updateQuantity, removeFromCart, totalCost } = useContext(ShoppingCartContext)

    return (
        <div>
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: 
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      min="1"
                    />
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <hr />
                </div>
              ))}
              <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
            </div>
          )}
        </div>
      )
    }
    
    export default ShoppingCart