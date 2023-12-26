// Interface in ts
// type used in functional components whereas interface is used in object and classes
// Interface allows us to make a contract for an shape of the objectand it is primarily used for typechecking during development and do not generate any javascript code at the runtime.

interface PERSON {
    name: string;
    age: number;
    favMovies?: string
}

const person01: PERSON = {
    name: 'Prachanda',
    age: 22,
    favMovies: 'animes'
}


const person02: PERSON = {
    name: 'Sushmita',
    age: 20,
}