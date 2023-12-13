//  write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome else false

const isPalindrome = (string: string): boolean => {
    let str = string.split("").reverse().join("")
    return str === string
}

console.log(isPalindrome('ramesh'));
console.log(isPalindrome('racecar'));

// Create a functin called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
const calculateAverage = (arr: number[]): number => {
    let sum = 0
    arr.forEach(num => sum += num)
    let average = sum / arr.length
    return average
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
const findMaxValue = (arr: number[]): number => {
    let max = arr[0]
    arr.forEach((value) => {
        if (value > max) {
            max = value
        }
    })
    return max
}

console.log(findMaxValue([1, 2, 4, 55, 6, 53]));
