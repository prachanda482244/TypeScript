// Generics in typescript allow you to create reusable components or function that can work with multiple data types
// Normal function to log and return
const logAndReturn = (value: number | string): number | string => {
    console.log(value)
    return value
}
const numberResult = logAndReturn(26)
const stringResult = logAndReturn("Hello from function")


// Generic function to log and return
const genericLogAndReturn = <T>(value: T): T => {
    console.log(value)
    return value
}
//This function can accept any type of data this is the power of generics

const numberResultGenerics = genericLogAndReturn<number>(126)
const stringResultGenerics = genericLogAndReturn<string>("Hello from generics")
const booleanResultGenerics = genericLogAndReturn<boolean>(true)

// const add = <T extends number | string>(a: T, b: T): T => {
//     return a + b
// }
// add(2, 3)