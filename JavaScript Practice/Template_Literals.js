//backticks  ``

//string

let str="This is a String";
console.log(str);
console.log(typeof str);


//template literals

let s=`This is template literal(also a string)`;
console.log(s);
console.log(typeof s);

//Practical Example

//normal way
let object={
    item:"Pen",
    price:10,
};

console.log("the price of",object.item, "is",object.price,"rupees");

//notice that here 10 is highlighted since it is a number

//Now use of bacticks and it advantage

console.log(`the price of ${object.item} is ${object.price} rupees`);

//but in literals it  is consider as part of string so no highlight
//-----------------------------------------------------------------------------------------------------------------------------------

//String interpolation   (using expression in string)

console.log(`the sum of 1+2+3 is ${1+2+3}`); //6

//escape character  (\n, \t, )  count as one
console.log(`Adeel\nHaider`);   //string length= 12