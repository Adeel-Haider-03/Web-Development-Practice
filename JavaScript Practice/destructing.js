//destructing array     store array elements into individual variable/array

let numbers=[1,2,3,4,5,6,7];

//let[num1,num2]=numbers;       //will store 1,2 in num1 and num2 rspectively
let[num1,num2,...othernum]=numbers;   //we can use rest to store other num as array

console.log(num1);
console.log(num2);
console.log(othernum);


//destructing objects

const data={
    name: "Adeel",
    age:14,
    dep:"CS",
    password:"123",
    arr:[1,2,3,4,5]
};

/* let {name,password,arr}=data;  // will store respective key as separate variable/array

console.log(name);
console.log(password);
console.log(arr); */

//we can also store key in separate named variable

let{name:a,password:b,arr:c}=data;
console.log(a,b,c);