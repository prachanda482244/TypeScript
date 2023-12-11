// Todo :1 Write a program to add two numbers.
// Todo :2 How to catch erros and solve it
// Todo :3 TS configuration file

// This is how we can do it in normal js

// Fun define
// let sum = (a,b)=>{
// return a+b;
// }

// // Fun call
// sum(5,10)

// IN TS
let sums = (a: number, b: number): number => {
    return a + b
}
console.log(sums(5, 10)); // valid cause we passed both number as an argument
// sums(1, '2') // invalid cause we passed string as a second parameter


