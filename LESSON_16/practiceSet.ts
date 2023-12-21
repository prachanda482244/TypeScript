//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
type ProductInformation = readonly [string, number, number]

const displayProductInformation = (product: ProductInformation) => {
    const [name, price, quantity] = product
    console.log(`The name of the product is ${name} and the price is ${price} and ${quantity} quantity is available.`);
}
// Create two product instances using this tuple type and display their information.
const productEcom: ProductInformation = ['Laptop', 120000, 2]
displayProductInformation(productEcom)


//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:
type SubjectGrade = readonly [string, number]

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
const studentGrade1: SubjectGrade[] = [
    ['Math', 60],
    ['English', 80],
    ['Science', 90]
]

const totalGrades = studentGrade1.reduce((sum, [, grade]) => sum + grade, 0)
const averageGrade = totalGrades / studentGrade1.length;
console.log('Student Grades:');
studentGrade1.forEach(([subject, grade]) => {
    console.log(`${subject}: ${grade}`);
});

console.log(`\nAverage Grade: ${averageGrade}`);

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

type WeatherData = readonly [string, number, string]
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
const displayWeather = (weather: WeatherData[]) => {
    console.log('Weather information');
    weather.forEach(([name, deg, cond]) => {
        console.log(`City name: ${name} \n Temperature: ${deg}°C \n Weather Condition: ${cond}`);
        // console.log(`${name}: ${deg}°C, ${cond}`);
    })

}

const weather: WeatherData[] = [
    ['Kathmandu', 25, 'Sunny'],
    ['Pokhara', 18, 'cloudy'],
    ['Dhading', 30, 'rainy']
]
displayWeather(weather)