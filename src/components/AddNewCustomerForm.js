import React from 'react'
import { useState } from 'react'

export default function AddNewCustomerForm(props) {
    const [newCustomer, setNewCustomer] = useState({

        firstName: '',
        lastName: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitCallback(newCustomer)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={newCustomer.firstName} onChange={(e) => {
                    setNewCustomer({ ...newCustomer, firstName: e.target.value })
                }} />
                <label>Last Name</label>
                <input value={newCustomer.lastName} onChange={(e) => {

                    setNewCustomer({ ...newCustomer, lastName: e.target.value })


                }} />
                <button>Add new customer</button>
            </form>
        </div>
    )
}
