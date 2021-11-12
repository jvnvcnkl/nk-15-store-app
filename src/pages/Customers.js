import React from 'react'
import { useState } from 'react'
import AddNewCustomerForm from '../components/AddNewCustomerForm'
export default function Customers() {

    const [customers, setCustomers] = useState([
        {
            id: 1,
            firstName: 'Ana',
            lastName: 'Viva',
        },
        {
            id: 2,
            firstName: 'Marko',
            lastName: 'Aqua',
        },
        {
            id: 3,
            firstName: 'Dusan',
            lastName: 'Voda',
        }
    ])




    const handleRemoveUser = (id) => {
        setCustomers(customers.filter((customer) => id !== customer.id))
    }

    const handleSubmit = (newCustomer) => {

        setCustomers([...customers, { ...newCustomer }])

    }






    return (
        <div>
            <AddNewCustomerForm submitCallback={handleSubmit} />

            <div>
                <h2>Customers</h2>
                <ul>   {customers.map((customer) => (
                    <li key={customer.id}>{customer.firstName} {customer.lastName}  <button onClick={() => handleRemoveUser(customer.id)}>Remove user </button></li>


                ))}  </ul>
            </div >

        </div>
    )
}
