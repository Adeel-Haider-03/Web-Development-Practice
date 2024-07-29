// concat
let a=["bmw","civic"];
let b=["suv","tesla"];

// in concat whichever eleemtn is written first will have thier element first, e.g here a elelmnts will be first follwd by b
// let c = a.concat(b);

// console.log(c);

//if we use push method, then b become nested array within a
a.push(b)
console.log(a); 

//reverse an array

// c.reverse();
// console.log(c);

//------------------------------------------------------------------------------------------------------------

/*  Splice Method  */

//The splice() method adds and/or removes array elements.

//let arr=["mango","banana","grapes","apple"];

//arr.splice("index from where to start", "no of element to be deleted including index element", "any string to replace afterward")

//arr.splice(2,2,"kiwi","lemon"); //will delete grapes and apple and add kiwi and lemon at index 2
//console.log(arr);

//arr.splice(2);  // will delele mango and banana

//arr.splice(2,0,"hmmmm");  // at ind 2 delete 0 element and add hmmm  [mango,banana,hmmmm,grapes,apple]
//console.log(arr);

//-------------------------------------------------------------------------------------------------------------------

/* Sort Method */

let arr=["mango","banana","grapes","apple"];

arr.sort();
console.log(arr);

let num=[40, 100, 1, 5, 25, 10];
num.sort();
console.log(num);      //[ 1, 10, 100, 25, 40, 5 ]  because it look to first digit only
                                                // so we use sort for strings and character arrays only

//or in order to sort we use function inside sort
num.sort(function(a, b){
    return a-b             //a=40 and b=100 and so on..... if a-b=positive then a comes after b else b comes after a
                                                            //here 40-100=-60,   so 40 comes before 100
                                                         //   100-1=99 so 100 comes after 1
});

console.log(num); 

/* 
difference between slice and splice

slice doesn't manipulate original array while splice does ------------------>>> this is imp difference
, secondly slice doesn't include last range while splice does

 */

const myArr=[1,2,3,4,5,6,7]

console.log("A",myArr);

const ar1=myArr.slice(1,4)
console.log(ar1);
console.log("B",myArr);

const ar2=myArr.splice(1,4)
console.log(ar2);
console.log("C",myArr);   // we see arr is altered , now myArr is [1,6,7],  2,3,4,5 is spliced
