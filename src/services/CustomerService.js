import React from 'react'

class CustomerService {
    customers = [{
        id: 1,
        firstName: 'Ana',
        lastName: 'Viva',
        productsBought: [],
    },
    {
        id: 2,
        firstName: 'Marko',
        lastName: 'Aqua',
        productsBought: [],
    },
    {
        id: 3,
        firstName: 'Dusan',
        lastName: 'Voda',
        productsBought: [],
    }
    ]

    static consumerId = 4;

    getAll() {
        return [...this.customers]
    }
    getCustomer(id) {
        return this.customers.find((customer) => id == customer.id)
    }

    removeCustomer(id) {
        this.customers.filter((customer) => id !== customer.id)
    }

    addCustomer(newCustomer) {
        const customer = { ...newCustomer, id: CustomerService.consumerId, productsBought: [] }
        this.customers.push(customer)
        CustomerService.consumerId++;

        return customer

    }

    addProduct(){
        //
    }

    // full name getter

}



export default new CustomerService;