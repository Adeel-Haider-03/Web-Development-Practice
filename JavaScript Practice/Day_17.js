//Q1
let numbers=[1,2,3,4,5,6,2,3];
let newArray=numbers.filter((num)=>{
    return num!==2;
});
console.log(newArray);

//another method

for (let i=0; i<numbers.length; i++){
    if (numbers[i]==2){
        numbers.splice(i,1);
    }
}
console.log(numbers);

//Q2

let number="287152";
let sum=0;
for (let i of number){
    let num=parseInt(i);
    sum=sum+num;
}
console.log(sum);