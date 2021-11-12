import React from 'react'
import { useState } from 'react'
import ProductService from '../services/ProductService'
export default function Products() {

    const [products, setProducts] = useState(
        ProductService.getAll())

    const [searchField, setSearchField] = useState('')

    const handleSearch = (e) => {
        setSearchField(e.target.value)


    }
    return (
        <div>
            <h3>Search by name </h3>
            <input value={searchField} onChange={handleSearch} />
            <h2>Products</h2>
            <ul>   {products.filter((product) => product.name.startsWith(searchField)).map((product) => (
                <li key={product.id}>{product.name}


                </li>

            ))}  </ul>




        </div>
    )
}
