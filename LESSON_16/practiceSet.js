"use strict";
//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
const displayProductInformation = (product) => {
    const [name, price, quantity] = product;
    console.log(`The name of the product is ${name} and the price is ${price} and ${quantity} quantity is available.`);
};
// Create two product instances using this tuple type and display their information.
const productEcom = ['Laptop', 120000, 2];
displayProductInformation(productEcom);
// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
const studentGrade1 = [
    ['Math', 60],
    ['English', 80],
    ['Science', 90]
];
const totalGrades = studentGrade1.reduce((sum, [, grade]) => sum + grade, 0);
const averageGrade = totalGrades / studentGrade1.length;
console.log('Student Grades:');
studentGrade1.forEach(([subject, grade]) => {
    console.log(`${subject}: ${grade}`);
});
console.log(`\nAverage Grade: ${averageGrade}`);
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
const displayWeather = (weather) => {
    console.log('Weather information');
    weather.forEach(([name, deg, cond]) => {
        console.log(`City name: ${name} \n Temperature: ${deg}°C \n Weather Condition: ${cond}`);
        // console.log(`${name}: ${deg}°C, ${cond}`);
    });
};
const weather = [
    ['Kathmandu', 25, 'Sunny'],
    ['Pokhara', 18, 'cloudy'],
    ['Dhading', 30, 'rainy']
];
displayWeather(weather);
