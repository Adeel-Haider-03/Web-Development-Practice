//map method
//create modifed duplicate array
let arr=[1,2,3,4,5,6,7,8,9,10];

/* let newArr= arr.map((val)=>{
    return val*2
});

console.log(newArr); */

//Filter Method ; return filtered out array

let evenArray=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenArray);

let greaterArr=arr.filter((val)=>{
    return val>3;
});
console.log(greaterArr);


//reduce method

//syntax
// arr. reduce((acc,curr)=>(),initial value)

let output= arr.reduce((result,current)=>{
    return result+current;
},0);
console.log(output); //55   1+2=3 , 3+4=7, 7+5=12, 12+6=18, 18+7=25, 25+8=33, .......res+curr=res.......


//return max nmber

let array=[7,3,5,12,76,23,56];

let max= array.reduce((res,curr)=>{
    return res>curr? res:curr;
});

console.log("max number is",max);

//inlciude methid
let colors=["red","green","blue"];
console.log(colors.includes("red")); //will return as true as red is included

console.log(colors.includes('Red')); //will return false since case sensitive

//----------------------------------------------------------------------------------------------------------------------------------------

// push , pop +>   add at end,  delete at end
 //shift , unshift =>  add at start , delete at start

let cars=["bmw","Tesla"];

cars.push("civic");   //at end addition
console.log(cars);

cars.pop();   //delete civic  (at end deletion)

cars.shift(); //delete bmw  (at start deletion)

cars.unshift('tuktuk');  //add tuktuk at start

console.log(cars);