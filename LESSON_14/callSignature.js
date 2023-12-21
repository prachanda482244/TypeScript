"use strict";
const student1 = {
    name: 'Prachanda',
    age: 22,
    gender: 'male',
    greet: (country) => `Welcome ${student1.name} to the ${country}`
};
const student2 = {
    name: 'Rajesh',
    age: 22,
    gender: 'male',
    greet: (country) => `Welcome ${student1.name} to the ${country}`
};
console.log(student1.greet('nepal'));
