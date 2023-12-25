"use strict";
// We can pass more than one placeholder in generics which makes our function to addopt more than two types. Like number and string  , number and booolean
const genericsTypes = (a, b, c) => {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
};
const numberAndStringTypes = genericsTypes(2, 'string');
const numberAndBooleanTypes = genericsTypes(2, true);
