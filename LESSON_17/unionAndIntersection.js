"use strict";
// Union in a typescript refers to the type that are allowed to a function , variable to choose from there.
const inputValue = (name) => {
    console.log(`Hello ${name}`);
};
inputValue('prachanda');
inputValue(22);
inputValue(true);
const employee = {
    name: 'Prachanda',
    age: 22,
    department: 'IT'
};
const employee2 = {
    name: 'Prachanda',
    department: "It",
    age: 22,
    emp_id: 1
};
