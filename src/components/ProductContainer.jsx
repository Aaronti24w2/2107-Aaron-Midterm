import React, { useEffect, useState } from 'react'

import ProductList from './ProductList'

const ProductContainer = () => {
    const [apiData, setApiData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getProductData()
     }, [])

     const getProductData = async () => {
        setisLoading(true);
        const data = await fetch('https://fakestoreapi.com/products')
        const jsonData = await data.json()
        setApiData(jsonData)
        setisLoading(false)
     }
        if (isLoading) {
            return <p>Loading...</p>
        }
    
        return (
            <div>
                <ProductList data={apiData} />
            </div>
          )
        
}
    
export default ProductContainer
     
