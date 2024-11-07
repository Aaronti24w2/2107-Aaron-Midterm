import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { Link } from 'react-router-dom'





const ProductList = ({ data }) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product.id}>
              <TableCell>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                  {product.title} 
                </Link>
              </TableCell>
                <TableCell align="right">${product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  export default ProductList