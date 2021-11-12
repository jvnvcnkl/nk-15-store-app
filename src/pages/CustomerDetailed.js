import React from 'react'
import { useParams } from 'react-router'
import CustomerService from '../services/CustomerService';

export default function CustomerDetailed() {
    let { customerId } = useParams();
    const customer = CustomerService.getCustomer(customerId)

    return (
        <div>
            <h3>Customer </h3>
            Full Name: {customer.firstName} {customer.lastName}
            <ul>
                <h4>Products :</h4>{customer.products.map((product) => <li> {product}</li>)}
            </ul>
        </div>
    )
}
