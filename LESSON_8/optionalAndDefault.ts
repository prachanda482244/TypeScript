// default params in function
const defaultParams = (name: string, id: number = 1): string => {
    return `Welcome ${name} your id is ${id}`
}

// Optional params in function

const optionalParams = (name: string, age?: number): string => {
    if (age === 18) {
        return `${name} you can drive `
    } else {
        return `${name} you can't drive`
    }
}

console.log(defaultParams('sagar'));
console.log(defaultParams('prachanda', 2));
console.log(defaultParams('rajesh'));

console.log(optionalParams('rajesh', 18));
console.log(optionalParams('ramesh', 20));
