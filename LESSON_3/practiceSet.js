//Practice Set
// Declare a variable longText of type string and assign it to a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText
var longText = "This is a long text string";
var shortText = longText.substring(0, 10);
console.log(shortText);
// Declare two variable string1 and string2 of type string and assign them different sentences. Compare the two strings and store the results (true or false) in a variable called areEqual.
var string1 = "This is a string";
var string2 = "This is a string";
var areEqual = string1 === string2;
console.log(areEqual);
// Declare variables product and price of type string and number , respectively. Create string using template literals to display the product and price in the format "The product is ${product} is priced at ${price} dollars"
var product = 'Laptop';
var price = 200;
var display = "The product is ".concat(product, " and is priced at ").concat(price, " dollars");
console.log(display);
