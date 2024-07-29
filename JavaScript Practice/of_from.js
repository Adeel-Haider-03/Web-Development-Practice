const num1=134
const num2=14
const num3=236

let arr=Array.of(num1,num2,num3)  //Create a new array from a number of arguments
console.log(arr);

let name= "Adeel"
let newArr=Array.from(name);  //Create an array from a string
console.log(newArr);

let obj={
    name: "Adeel",
    age:24,
    student: true
}

console.log(Array.from(obj));  //return emty array, we need to specify whether we want to make array of keys or values

// for values
const ArrValue=Array.from(Object.values(obj));
console.log(ArrValue);

// for keys

const key=Array.from(Object.keys(obj));
console.log(key);

//for key-value pair
const keyValue=Array.from(Object.entries(obj));
console.log(keyValue);


//in DOM, HTMLCOllection and NodeList are not array though they behave like array
// NodeList can be iterated by ForEach method only while HTMLCollection can't be by any so we need to convert it into array

//for that we use Array.from() method