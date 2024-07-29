//normal function
function sum(a,b){
    return a+b;
}

//Arrow function

/* const sumNum=(a,b)=>{
    return a+b;
}; */

//if func return a single value then we can re write like this as well
const sumNum=(a,b)=>(a+b);


const printHello=()=> console.log("Hello");


console.log(sum(5,6));
console.log(sumNum(5,6));
printHello();