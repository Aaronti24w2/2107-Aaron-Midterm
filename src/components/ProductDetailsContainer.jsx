import React, {useEffect, useState} from 'react'
import { useParams }  from 'react-router-dom'
import ShowProductDetails from './ShowProductDetails'

const ProductDetailsContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const getProductDetails = async () => {
            setIsLoading(true)
            const idData = await fetch(`https://fakestoreapi.com/products/${id}`)
            const productData = await idData.json()
            setProduct(productData)
            setIsLoading(false)
        }
        getProductDetails()
    }, [id])
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <ShowProductDetails product = {product} />
        </div>
    )
}

export default ProductDetailsContainer