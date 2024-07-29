const arr=[1,2,3,4,5];

let even=arr.filter((num)=>{    //will filter even number
    return num%2==0});

let square=arr.map((num)=>{   //create new array from org based on given func
    return num*num;
})

arr.every((num)=>{  //false since every elelemnt is ot even
    return num%2==0;
})

arr.some((num)=>{  //true since some arr num are odd numbers
    return num%2!==0;
})


let sum=arr.reduce((res,num)=>{    
    return res+num;
})

let MAX=arr.reduce((max,num)=>{
   // return max>num?max:num;
   if(max>num){
    return max;
   }
   else{
    return num;
   }
})

let sum1=function(a,b=3){  //default parameter, if we pass b value then it will change otherwise it will be 3
    return a+b;
}

//let sum1=function(a=3,b)  {
//return a+b; 
//sum1(1); // a=1 , b= undefined  because paramter are in order so this willl be worng

sum1(1);  //4
sum1(1,6);  //7

/*Spread Operator*/

let str="AdeelHaider";
//console.log(...str);   
//we can pass whole arr or str using spread operator

Math.min(1,2,3,4,5);
Math.min(...arr); //usually we pass values in math.min but since spread operator split arr into individual elem so it work

let name=[..."Adeel"];   //string will be splited into individual character by spread operators and stored as array of char now

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9];
let arr3=[...arr1,...arr2];

let obj={...arr1}; //will split array and store as object, each key will be index of num
console.log(obj);
//rest

function min(...num){                  //can pass many arguments, it will store them as array num
    return num.reduce((curr,next)=>{
        return next<curr?next:curr;
    })
}

min(1,2,3,4,5,6,67,8,9,5,433,);

function Adeel(arg1,...manyArg){   //after spread we can't write argument, it will be error
    console.log(arg1);
    for (let i=0; i<manyArg.length; i++){
        console.log(manyArg[i]);
    }
}

Adeel("HI",1,2,3,4,5,6);


//argument keyword

function args(a,b){
    console.log(arguments[0])   //will print arg a passes ,here 2
    console.log(arguments); //  print 2,4
}

args(2,4);

let myArr=[1,2,3,4,5]
let strArr=myArr.join()     //convert array into string
console.log(strArr);

console.log(typeof myArr);
console.log(typeof strArr);




//method chaining
let array=[1,2,3,4,5,6,7,8,9,10]

let newArray=array.map(num => num *10)
                            .map((num)=> num+1)
                            .filter((num)=> num>40)

    console.log(newArray);                        