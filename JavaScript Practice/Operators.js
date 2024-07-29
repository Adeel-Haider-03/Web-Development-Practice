// Nullish Coalescing Operator

// used for undefined and null value, e.g we fetch data from DB if it comes undefined or null we can assign other value

// let val= 10?? 20   //10

// let val = null??15  //15

let val= undefined??20  //20


console.log(val);



//ternary operator

let age=10;

console.log(age>=18?"Adult":"Not Adult");