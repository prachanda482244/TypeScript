type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    class?: string; // optional
    address: {
        city: string;
        country: string;
    }
}
const person1: Person = {
    name: 'Prachanda',
    age: 22,
    isStudent: true,
    class: 'BCA',
    address: {
        city: 'kathmandu',
        country: 'Nepal'
    }
}
const person2: Person = {
    name: 'Rajesh',
    age: 22,
    isStudent: false,
    address: {
        city: 'Dhading',
        country: 'Nepal'
    }
}

