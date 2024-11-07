import { useRoutes }  from 'react-router-dom'
import './App.css'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'



function App() {
  console.log("App is rendering")
  let element = useRoutes(
    [
      {
        path: '/',
        element: <Home />
      },
      {
        path:`/product/:id`,
        element: <ProductDetails />
      },
      {
        path:'/shoppingcart',
        element: <ShoppingCart />
      }
    ]

  )
  return element 
}

export default App
