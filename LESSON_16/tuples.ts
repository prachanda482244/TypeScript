// Creating the tuple type for person information
// Name , age , isStudent
type PersonInfo = readonly [string, number, boolean]

// Function to display person information
const displayPersonInfo = (person: PersonInfo) => {
    const [name, age, isStudent] = person
    console.log(`Name:${name}\n Age:${age}\n isStudent:${isStudent ? 'yes' : 'no'}`);
}

//Example usage
const person1_lado: PersonInfo = ['Prachanda', 22, true]
// person1_lado.push("something ") // throws error because of readonly in the tuples
displayPersonInfo(person1_lado)
