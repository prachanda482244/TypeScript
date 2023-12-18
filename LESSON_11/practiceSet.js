"use strict";
//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const stringName = ['prachanda', 'prakash', 'rajesh'];
const uppercaseNames = stringName.map((name) => name.toUpperCase());
console.log(uppercaseNames);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
const numbersArray = [1, 2, 3, 4, 5];
const squareArray = numbersArray.map((num) => num ** 2);
console.log(squareArray);
//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const filteredNames = names.filter((name) => name.length > 4);
console.log(filteredNames);
//? 2: Given an array of strings, filter out the names that start with the letter "A".
const startWithA = names.filter((name) => name.startsWith("A"));
console.log(startWithA);
