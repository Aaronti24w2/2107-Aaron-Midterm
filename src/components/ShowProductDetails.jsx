import React, {useContext} from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
const ShowProductDetails = ({ product }) => {
const { addToCart } = useContext(ShoppingCartContext)
    

    return (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} style={{ width: '200px' }} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate} / 5</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      )
}

export default ShowProductDetails