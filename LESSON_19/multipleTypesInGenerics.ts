// We can pass more than one placeholder in generics which makes our function to addopt more than two types. Like number and string  , number and booolean

const genericsTypes = <T, U>(a: T, b: U, c?: boolean) => {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

const numberAndStringTypes = genericsTypes<number, string>(2, 'string');
const numberAndBooleanTypes = genericsTypes<number, boolean>(2, true);