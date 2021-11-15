import React from 'react'
import { useState } from 'react'
import AddNewCustomerForm from '../components/AddNewCustomerForm'
import {
    Switch,
    Route, Link, useRouteMatch
} from 'react-router-dom'
import CustomerService from '../services/CustomerService';

export default function Customers() {

    let match = useRouteMatch();

    const [customers, setCustomers] = useState(
        CustomerService.getAll())




    const handleRemoveUser = (id) => {
        const customer = CustomerService.removeCustomer(id)

        if (customer) {
            setCustomers([...customers, customer])
        }
    }

    const handleSubmit = (newCustomer) => {
        const customer = CustomerService.addCustomer(newCustomer);

        if (customer) {
            setCustomers([...customers, customer])
        }

    }






    return (
        <div>
            <AddNewCustomerForm submitCallback={handleSubmit} />

            <div>
                <h2>Customers</h2>

                <ul>   {customers.map((customer) => (
                    <li key={customer.id}>{customer.firstName} {customer.lastName}  <button onClick={() => handleRemoveUser(customer.id)}>Remove user </button>

                        <Link to={`${match.path}/${customer.id}`}> Latest Purchases </Link >
                    </li>


                ))}  </ul>

            </div >

        </div>
    )
}
