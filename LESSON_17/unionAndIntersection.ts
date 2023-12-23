// Union in a typescript refers to the type that are allowed to a function , variable to choose from there.
const inputValue = (name: string | number | boolean) => {
    console.log(`Hello ${name}`);
}
inputValue('prachanda')
inputValue(22)
inputValue(true)

// Intersection is a common from the two set.

type Person_Info = {
    name: string,
    age: number
}

type Employee_Info = {
    emp_id: number,
    department: string
}

// Union
// For union we need to mention the all the property from the one type, either from Person_info or from Employee_info if any field miss then it will throw error but after you write the full field of one type then you can access only one field from the another data
type Employee_details = Person_Info | Employee_Info;
const employee: Employee_details = {
    name: 'Prachanda',
    age: 22,
    department: 'IT'
}

// Intersection
// For intersection we need to write all the properties of the object from both type if one of them is missing then it will throw the error.
type Employee_details2 = Person_Info & Employee_Info;
const employee2: Employee_details2 = {
    name: 'Prachanda',
    department: "It",
    age: 22,
    emp_id: 1
}