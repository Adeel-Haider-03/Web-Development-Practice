
 let marks=[23,45,76,98,99];

let sum=0;
for (let i of marks){    //for-of loop

    sum=sum+i;
}

let average=sum/marks.length;  

console.log(`the average of marks is: ${average}`);

