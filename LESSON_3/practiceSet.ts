//Practice Set
// Declare a variable longText of type string and assign it to a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText
let longText: string = "This is a long text string"
let shortText: string = longText.substring(0, 10);
console.log(shortText);


// Declare two variable string1 and string2 of type string and assign them different sentences. Compare the two strings and store the results (true or false) in a variable called areEqual.
let string1: string = "This is a string"
let string2: string = "This is a string"
let areEqual: boolean = string1 === string2
console.log(areEqual);


// Declare variables product and price of type string and number , respectively. Create string using template literals to display the product and price in the format "The product is ${product} is priced at ${price} dollars"
let product: string = 'Laptop'
let price: number = 200

let display: string = `The product is ${product} and is priced at ${price} dollars`
console.log(display);
