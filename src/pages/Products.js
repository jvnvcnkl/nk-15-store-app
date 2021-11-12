import React from 'react'
import { useState } from 'react'
import ProductService from '../services/ProductService'
export default function Products() {

    const [products, setProducts] = useState(
        ProductService.getAll())
    return (
        <div>
            <h2>Products</h2>
            <ul>   {products.map((product) => (
                <li key={product.id}>{product.name}


                </li>


            ))}  </ul>



        </div>
    )
}
