let str="ApnaCollege";

console.log(str.indexOf('C')); 

//slice method

//let newStr=str.slice(3);      // will give us str from index 3 to end
//let newStr=str.slice(3,10);     // will give us index 3 to 9 because 10 will be non inclusive
let newStr=str.slice(-3);       // will give us length-2, in this case 11-3=>8, so will print after index 8 to end
console.log(newStr);


//replace method

let st="HelloWorld";

//console.log(st.replace('ll','dd'));
console.log(st.replace('l','d'));  // it will replace only first l
console.log(st.replace('l','d'));  // so to do another we have to do for 2nd again, or we can use loop to rplace all l wit d


//repeat method +> make copies of doubling and tripling them...
let m="mango";
console.log(m.repeat(4));  //will quadriple mango



//method chaining
/* let s="   adeel    haider   ";

console.log(s.toUpperCase().trim()); */


//Mixed arrays
let info=["adeel",95,9.8];
console.log(info);