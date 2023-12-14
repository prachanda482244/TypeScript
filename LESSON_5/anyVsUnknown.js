"use strict";
// Type assertion in ts
let anyType = "This is a string";
let newNum = anyType.length;
// The any type is the most flexible type in Typescript. It essentially turns off all type checking for the variables or expressions, you will see type any when you first write the codd
// ANY
let anyUser = 'user';
anyUser = 10;
anyUser = true;
// Unknown
let num2;
num2 = 'string';
num2 = true;
num2 = 10;
if (typeof num2 === 'number') {
    console.log(num2 + 10);
}
else if (typeof num2 === 'boolean') {
    console.log(true);
}
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};
const processData = async () => {
    const response = await fetchData();
    if (typeof response === 'object') {
        console.log(response);
    }
};
