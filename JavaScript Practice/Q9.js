//Qs: return marks greater than 90 using filterS

let marks=[97,64,32,49,99,96,86];

let Max=marks.filter((val)=>{
    return val>90;
});

console.log(Max);

//Qs

let n=prompt("enter a num");
let arr=[];
for (let i=0; i<n; i++){
    arr[i]=i+1;
}

console.log(arr);

let sum= arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(sum);

let prod=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(prod);