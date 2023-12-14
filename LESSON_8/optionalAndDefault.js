"use strict";
// default params in function
const defaultParams = (name, id = 1) => {
    return `Welcome ${name} your id is ${id}`;
};
// Optional params in function
const optionalParams = (name, age) => {
    if (age === 18) {
        return `${name} you can drive `;
    }
    else {
        return `${name} you can't drive`;
    }
};
console.log(defaultParams('sagar'));
console.log(defaultParams('prachanda', 2));
console.log(defaultParams('rajesh'));
console.log(optionalParams('rajesh', 18));
console.log(optionalParams('ramesh', 20));
