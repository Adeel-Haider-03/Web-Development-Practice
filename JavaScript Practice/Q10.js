let str="abcdabcdefgggh";
let ans="";
let unique=(s)=>{
    
    for(let i=0; i<s.length; i++){
        let current=s[i];
        if(ans.indexOf(current)==-1){
            ans+=current;
        }
    }
    return ans;
};

console.log(unique(str));

//Q2
let country = ["Australia", "Germany", "United States of America"];

function longest(arr){
    let max=arr[0].length;
    let largest;
    for (let i=0; i<arr.length; i++){
        if(max<arr[i].length){
            max=arr[i].length;
            largest=arr[i];
        }
    }
    return largest;
}
console.log(longest(country));