var funSum = function (a, b) {
    return a + b;
};
console.log(funSum(2, 4));
var greeting = function (name) {
    return "Hello ".concat(name, ", how do you doing");
};
console.log(greeting("rajesh"));
var greeAuto = function (name, role) {
    if (role === void 0) { role = "developer"; }
    return "Hello ".concat(name, " you're assigned as a ").concat(role);
};
console.log(greeAuto('prachanda'));
console.log(greeAuto('Ranjan', 'programmer'));
