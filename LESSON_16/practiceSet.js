//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
var displayProductInformation = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("The name of the product is ".concat(name, " and the price is ").concat(price, " and ").concat(quantity, " quantity is available."));
};
// Create two product instances using this tuple type and display their information.
var productEcom = ['Laptop', 120000, 2];
displayProductInformation(productEcom);
// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
var studentGrade1 = [
    ['Math', 60],
    ['English', 80],
    ['Science', 90]
];
var totalGrades = studentGrade1.reduce(function (sum, _a) {
    var grade = _a[1];
    return sum + grade;
}, 0);
var averageGrade = totalGrades / studentGrade1.length;
console.log('Student Grades:');
studentGrade1.forEach(function (_a) {
    var subject = _a[0], grade = _a[1];
    console.log("".concat(subject, ": ").concat(grade));
});
console.log("\nAverage Grade: ".concat(averageGrade));
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
var displayWeather = function (weather) {
    console.log('Weather information');
    weather.forEach(function (_a) {
        var name = _a[0], deg = _a[1], cond = _a[2];
        console.log("City name: ".concat(name, " \n Temperature: ").concat(deg, "\u00B0C \n Weather Condition: ").concat(cond));
        // console.log(`${name}: ${deg}°C, ${cond}`);
    });
};
var weather = [
    ['Kathmandu', 25, 'Sunny'],
    ['Pokhara', 18, 'cloudy'],
    ['Dhading', 30, 'rainy']
];
displayWeather(weather);
