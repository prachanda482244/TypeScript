type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string // method call signature
}

const student1: Student = {
    name: 'Prachanda',
    age: 22,
    gender: 'male',
    greet: (country: string): string => `Welcome ${student1.name} to the ${country}`
}

const student2: Student = {
    name: 'Rajesh',
    age: 22,
    gender: 'male',
    greet: (country: string): string => `Welcome ${student1.name} to the ${country}`
}
console.log(student1.greet('nepal'));
