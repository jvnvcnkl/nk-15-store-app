import React from 'react'

class CustomerService {
    customers = [{
        id: 1,
        firstName: 'Ana',
        lastName: 'Viva',
        products: [],
    },
    {
        id: 2,
        firstName: 'Marko',
        lastName: 'Aqua',
        products: [],
    },
    {
        id: 3,
        firstName: 'Dusan',
        lastName: 'Voda',
        products: [],
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
        const customer = { ...newCustomer, id: CustomerService.consumerId, products: [] }
        this.customers.push(customer)
        CustomerService.consumerId++;

        return customer

    }

}



export default new CustomerService;