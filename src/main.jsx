import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/ShoppingCartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/2107-Aaron-Midterm">
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)