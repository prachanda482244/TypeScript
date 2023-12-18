"use strict";
let numbers = [1, 2, 3, 4, 5];
// Map method
// Doubling each number
const double = numbers.map((elem) => (elem * 2));
console.log(double);
// Converting number into string
const string = numbers.map((elem) => elem.toString());
console.log(string);
// Filter method
//Filtering even numbers
const filteredNumbers = numbers.filter((num) => num % 2 == 0);
console.log(filteredNumbers);
// Filtering number greater than 3
const greaterNumber = numbers.filter((num) => num > 3);
console.log(greaterNumber);
