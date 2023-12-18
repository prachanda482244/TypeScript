"use strict";
// In Typescript , objects are used to represent data with key-value pairs. Each key in the object is a string or a symbol in ES6 that maps to a value.
// Lets consider a real-life example of representing a person's information using Typescript objects.
// name , age, isStudent,address {city, country}
const person = {
    name: 'Ran haitani',
    age: 22,
    isStudent: true,
    address: {
        city: 'Kathmandu',
        country: 'Nepal'
    }
};
// Todo accessing the object data
console.log(person.address.country);
// Todo updating object properties
// person.address.country = 123 // Invalid
person.address.country = 'India';
console.log(person.address.country);
