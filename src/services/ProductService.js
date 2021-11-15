import react from "react";

class ProductService {
    products = [
        {
            id: 1,
            name: 'Laptop',
            onCount: 4,
            outOfStock:false,
        }, {
            id: 2,
            name: 'Mobile phone',
            onCount: 5,
            outOfStock:false
        },
        {
            id: 3,
            name: 'Car',
            onCount: 10,
            outOfStock:false
        }


    ]

    static productId = 4;

    getAll() {
        return [...this.products]
    }
    getProduct(id) {
        return this.products.find((product) => id == product.id)
    }

    setCountIncrease(id){
        let product =   this.products.find((product) => id == product.id)
        product.onCount ++
        if(product.outOfStock){
            product.outOfStock= false;
        }
        return product
    }
    setCountDecrease(id){
        let product =   this.products.find((product) => id == product.id)
        if(product.onCount === 0) {
            product.outOfStock = true
        }else{
            product.onCount --
        }

        return product
    }


}

export default new ProductService;