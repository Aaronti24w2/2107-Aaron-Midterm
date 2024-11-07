import React from 'react'
import ProductContainer from '../components/ProductContainer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <h1>Welcome to my mini shopping app!</h1>
            <ProductContainer />
            <Link to="/shoppingcart">Shopping Cart</Link>
        </div>
    )
}

export default Home