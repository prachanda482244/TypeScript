// Define an interface or type representing a  product with properties for name, price and quantity . Create a product object with the following data

//Name:Laptop
// Price:1000
// Quantity:5

type Products = {
    name: string;
    price: number;
    quantity: number
}
const product1: Products = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
}

// Calculate total price
//Given the product object from the previous question. write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product

const calculateTotalPrice = (product: Products) => {
    return product.price * product.quantity
}

console.log(calculateTotalPrice(product1));
