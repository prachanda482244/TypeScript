"use strict";
const funSum = (a, b) => {
    return a + b;
};
console.log(funSum(2, 4));
const greeting = (name) => {
    return `Hello ${name}, how do you doing`;
};
console.log(greeting("rajesh"));
const greeAuto = (name, role = "developer") => {
    return `Hello ${name} you're assigned as a ${role}`;
};
console.log(greeAuto('prachanda'));
console.log(greeAuto('Ranjan', 'programmer'));
