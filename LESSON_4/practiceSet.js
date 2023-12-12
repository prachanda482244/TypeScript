// Write a  Typescript function called isEven that takes a number as a parameter and returns true if the number is even else false.
var isEven = function (num) {
    return num % 2 === 0 ? true : false;
};
// console.log(isEven(11));
// console.log(isEven(10));
//  Write a typescript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
var isDivisibleBy4And8 = function (num) {
    return (num % 4 === 0 && num % 8 === 0) ? true : false;
};
console.log(isDivisibleBy4And8(16));
console.log(isDivisibleBy4And8(20));
