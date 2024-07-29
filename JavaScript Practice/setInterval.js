
//console.log("Hello");

/* setInterval(()=>{
    console.log("World");  //it will print world after 2 sec infinetly
},2000);  */                   //so to stop we assign id and then use clearInerval(id)


/* let id=setInterval(()=>{
    console.log("World");
},2000) */;

//clearInterval(id);


//Practice Qs
/*Write a func that print hello world 5 times at interval of 2s*/

// 2s * 5= 10sec+2sec it mean after 10 sec it should stop, so we will create another timeout func to use clearIntervla func after 10 sec

/* let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("interval is cleared");
},10000);

 */
//we can pass 3 parameter in SetInterval

// let name=function(str){       //this function can be passed into settimeout directly
//     console.log(str);
// }

let nameInterval=setInterval(function(str){       //this function can be passed into settimeout directly
    console.log(str);
}, 2000,"Adeel");

// let nameInterval=setInterval(name, 2000,"Adeel");  //we need to give an id/name to interval so we can pass that in clearInterval


setTimeout(() => {
    clearInterval(nameInterval)
}, 10000);
