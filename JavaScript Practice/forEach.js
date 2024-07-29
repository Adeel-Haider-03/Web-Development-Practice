//in JS a function can also be pass as argument and return also

//Callback Function: a function which is passed as argument to another function
//  arr.forEach(callback function)

//High Order Function/Methods : those function which can take function as parameter or return function

function abc(num){
    return num;
}
function func(abc){
    return abc;
}

// console.log(func(5));

//forEach func is a function in which we can execte another function

/* let arr=[1,2,3,4,5];

arr.forEach(function printNum(num){   //forEach will pass num as argument
    console.log(num);
}) */

//this func doesn;t need to be call , it execute itself

//Now using Arrow Func

/* let arr=[1,2,3,4,5];

arr.forEach((num)=>{   //forEach will pass num as argument
    console.log(num);
}) */

//forEach is used when you want to print all elements of array

//we can also print arr and index, as a whole 3 parameter can be passed to forEach

let arr=['abc','def','999','adeel','xyz'];

// arr.forEach((num,index,arr)=>{ 
//     console.log(num,index,arr);
// })

let val=arr.forEach((num)=>{ 
    return num;                      //For each do not return any value
})
console.log(val);       //undefined
