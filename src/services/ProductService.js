

class ProductService {
    products = [
        {
            id: 1,
            name: 'Laptop'
        }, {
            id: 2,
            name: 'Mobile phone'
        },
        {
            id: 3,
            name: 'Car'
        }


    ]

    static productId = 4;

    getAll() {
        return [...this.products]
    }



}

export default new ProductService;