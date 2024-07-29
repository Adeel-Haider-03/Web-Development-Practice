
/* function vowel(str){
    let vowels=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowels++;
        }
    }
    return vowels;
}; */

//for of loop
/* function vowel(str){
    let vowels=0;
    for(let char of str){
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            vowels++;
        }
    }
    return vowels;
}; */



//Arrow function
const vowel=(str)=>{
    let vowels=0;
    for(const i of str){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            vowels++;
        }
    }
    return vowels;
};
console.log(vowel("hello"));