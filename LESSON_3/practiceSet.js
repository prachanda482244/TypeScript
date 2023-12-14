"use strict";
//Practice Set
// Declare a variable longText of type string and assign it to a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText
let longText = "This is a long text string";
let shortText = longText.substring(0, 10);
console.log(shortText);
// Declare two variable string1 and string2 of type string and assign them different sentences. Compare the two strings and store the results (true or false) in a variable called areEqual.
let string1 = "This is a string";
let string2 = "This is a string";
let areEqual = string1 === string2;
console.log(areEqual);
// Declare variables product and price of type string and number , respectively. Create string using template literals to display the product and price in the format "The product is ${product} is priced at ${price} dollars"
let product = 'Laptop';
let price = 200;
let display = `The product is ${product} and is priced at ${price} dollars`;
console.log(display);
