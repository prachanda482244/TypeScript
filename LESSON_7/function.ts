const funSum = (a: number, b: number): number => {
    return a + b
}

console.log(funSum(2, 4));

const greeting = (name: string): string => {
    return `Hello ${name}, how do you doing`;
}
console.log(greeting("rajesh"));

const greeAuto = (name: string, role: string = "developer"): string => {
    return `Hello ${name} you're assigned as a ${role}`
}

console.log(greeAuto('prachanda'));
console.log(greeAuto('Ranjan', 'programmer'));
