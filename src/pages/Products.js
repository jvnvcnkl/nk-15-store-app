import React from 'react'
import { useState } from 'react'
import ProductService from '../services/ProductService'
export default function Products() {


    // const [buttonState,setButtonSate]= useState({state:false,productId:0});

    const [products, setProducts] = useState(
        ProductService.getAll())

    const [searchField, setSearchField] = useState('')

    const handleSearch = (e) => {
        setSearchField(e.target.value)
    }

    const handleIncrement= (id) => {
      let  product = ProductService.setCountIncrease(id)
      product.outOfStock = false
        if(product){
            let newProducts =[...products]
            let productIndex = newProducts.findIndex((el) => el == product)
            newProducts[productIndex]=product
            setProducts(newProducts)
        }
    }
    const handleDecrement= (id) => {
        let product = ProductService.setCountDecrease(id)
       if(product) {
        let newProducts =[...products]
        let productIndex = newProducts.findIndex((el) => el == product)
        newProducts[productIndex]=product
        if(product.onCount ===0) {
            product.outOfStock= true
            
        }
        setProducts(newProducts)
       }
    }



    return (
        <div>
            <h3>Search by name </h3>
            <input value={searchField} onChange={handleSearch} />
            <h2>Products</h2>
            <ul>   {products.filter((product) => product.name.startsWith(searchField)).map((product) => (
            <li key={product.id}>{product.name}
            <button onClick={() => handleIncrement(product.id)}>+</button>
            <button  onClick={() => handleDecrement(product.id)} disabled={product.outOfStock}>-</button>
            {product.onCount}


                </li>

            ))}  </ul>




        </div>
    )
}
