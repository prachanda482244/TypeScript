// Create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number , converts the input to uppercase if its a string. To achieve this we use a union type to allow the function to accept both number and string
const log = console.log
const numberAndString = (arg: number | string): string | number => {
    if (typeof arg === 'number') {
        return `The double of ${arg} is : ${arg * 2}`
    }
    else if (typeof arg === 'string') {
        return `The uppercase of ${arg} is: ${arg.toUpperCase()}`
    }
    else {
        throw new Error('Only string and number allowed')
    }
}

log(numberAndString(5))
log(numberAndString(2))
log(numberAndString('Prachanda'))
log(numberAndString('Ran haitani'))

// We want to create a function that formats the value passed to it in a specific way based o its type  :
// If the input is a number , it should add a dollar sign and format it with two decimal places.
// If the input is boolean , it should return yes for true and no for false.
//  If the input is string , it should capitalize the first letter.

const formats = (input: string | number | boolean): string | number | boolean => {
    if (typeof input === 'number') {
        return `$${input.toFixed(2)}`
    }
    else if (typeof input === 'boolean') {
        return input ? 'Yes' : 'No'
    }
    else if (typeof input === 'string') {
        return input.charAt(0).toUpperCase() + input.slice(1);
    } else {
        return 'Invalid'
    }
}
log(formats('prachanda'))
log(formats(23))
log(formats(true))