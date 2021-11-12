import React from 'react'
import { useState } from 'react'
export default function AppCustomers() {

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
    return (
        <div>
            <h2>Customers</h2>
            <ul>   {customers.map((customer) => (
                <li>{customer.firstName} {customer.lastName}  <button onClick={() => handleRemoveUser(customer.id)}>Remove user </button></li>


            ))}  </ul>
        </div >
    )
}
