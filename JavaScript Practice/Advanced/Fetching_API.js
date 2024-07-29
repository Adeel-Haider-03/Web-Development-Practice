let url="https://catfact.ninja/fact"

/* fetch(url)             // fetching api, it return promise
.then((res)=>{          //return api but not in readable form
    return res.json();  // res.json() convert into readable format , it also return promise
})
.then((data)=>{
    console.log(data)   //print data
    console.log(data.fact);  //will print "fact" key
})
.catch((err)=>{
    console.log(err)
})
 */

// chaining  //

fetch(url)             
.then((res)=>{         
    return res.json();  
})
.then((data)=>{
    console.log("data 1:",data.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json()
})
.then((data2)=>{
    console.log("data 2:",data2.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json()
})
.then((data3)=>{
    console.log("data 3:",data3.fact);
})
.catch((err)=>{
    console.log(err)
})


//extra info
console.log("i am happy")       //it will print as promises are resolving in back, this show async nature of JS