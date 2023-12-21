"use strict";
// Define an interface or type representing a  product with properties for name, price and quantity . Create a product object with the following data
const product1 = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
};
// Calculate total price
//Given the product object from the previous question. write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1));
