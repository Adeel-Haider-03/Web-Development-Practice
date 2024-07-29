
console.log("Hi there");

//  setTimeout(function,timeout)  we pass a func as argument and timeout duration in millisecs

//we can pass any func  even with argumentsbut here i am using arrow func with no argument

//setTimeout(()=>{console.log("Apna College");},4000);

// setTimeout(()=>{
//     console.log("Apna College");
// },4000);

// console.log("Welcome to"); 
// console.log("Welcome to"); 
// console.log("Welcome to"); 
// console.log("Welcome to"); 
// console.log("Welcome to"); 
// console.log("Welcome to"); 

//all will execute and after 4 sec apna college will be displayed

let h1=document.querySelector('h1')

const changeME=function(){
    let h1=document.querySelector('h1')
    h1.textContent="HAHAHAHAHHAHA";

}

const changeText=setTimeout(changeME, 3000);

let btn=document.querySelector('#button')

btn.addEventListener("click",function(){
    console.log("Stopped");
    clearTimeout(changeText)
})
