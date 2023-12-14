"use strict";
// Declare a variable message and initialize it with the value  "Hello , Typescript". Infer the type of message using type inference.
let msg = 'Hello, Typescript';
console.log(msg);
// Write a function calculateArea that takes the length and width parameter of type number and returns their product the return type of the function using type inference.
const calculateArea = (length, width) => {
    return length * width;
};
console.log(calculateArea(2, 3));
