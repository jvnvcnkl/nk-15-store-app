import React from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/ProductService'
import CustomerService from '../services/CustomerService';
import { Redirect } from 'react-router';
import { useState } from 'react';
export default function ProductDetailed() {
    let { productId } = useParams();
    const product = ProductService.getProduct(productId)
 
    const customers = CustomerService.getAll();
    
    const [chosenCustomer,setChosenCustomer] = useState('')

    const handleConfirmButton=()=>{
        if(!chosenCustomer){
            alert('You have to choose a customer')
        }
        else{
            CustomerService.addProduct(chosenCustomer);
            ProductService.setCountDecrease(productId);

        }
    }

    const handleCancelButton= () =>{
            <Redirect to='/products' />
         }

    const handleChange = (e) =>{
        e.preventDefault()
        setChosenCustomer(e.target.value)
       
    }
    
    return (
        <div>
            <h3>Product</h3>

            {product.name}
        
            <label htmlFor="customer">Choose a customer: </label>
            <select name="customer" id="customer" onChange={handleChange} > 
            <option>Customer  </option>
            {customers.map((customer) => (
            <option value={customer.id} key={customer.id}>{customer.firstName +' '+ customer.lastName}</option>

        ))}

            </select>
            <button onClick={handleConfirmButton()}>Confirm</button>
            <button onClick={handleCancelButton()}>Cancel</button>
        </div>
    )
}
