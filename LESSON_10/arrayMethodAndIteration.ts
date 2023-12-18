// Adding a element to an array using push
let fruits:string[] = ['apple','banana','mango']
let newUpdatedFruits:number = fruits.push('grapes')
console.log(newUpdatedFruits); // it will give the length

// Removing element to an array using pop.
let removeFruits = fruits.pop()
console.log(removeFruits);

// Iterating over element
// You can iterate over the elements of an array using various looping constructs such as for, for of , or array methods like foreach

// for loop

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);   
}

// for of loop - print value , for in loop - print index
for(const fruit of fruits){
    console.log(fruit);
}

// forEach loop
fruits.forEach((fruit:string)=>console.log(fruit))
