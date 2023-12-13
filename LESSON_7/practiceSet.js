//  write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome else false
var isPalindrome = function (string) {
    var str = string.split("").reverse().join("");
    return str === string;
};
console.log(isPalindrome('ramesh'));
console.log(isPalindrome('racecar'));
// Create a functin called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
var calculateAverage = function (arr) {
    var sum = 0;
    arr.forEach(function (num) { return sum += num; });
    var average = sum / arr.length;
    return average;
};
console.log(calculateAverage([1, 2, 3, 4, 5]));
// Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
var findMaxValue = function (arr) {
    var max = arr[0];
    arr.forEach(function (value) {
        if (value > max) {
            max = value;
        }
    });
    return max;
};
console.log(findMaxValue([1, 2, 4, 55, 6, 53]));
