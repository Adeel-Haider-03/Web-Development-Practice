
let obj={
    name: "Adeel",
    Age: 24
}

const PromiseOne=new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("Task completed");
        let error=false;            
        if (!error) {
            resolve(obj)
        } else {
            reject("error, something went wrong")
        }
        
    }, 1000);
})

// PromiseOne
// .then((user)=>{
//     console.log(user);
//     console.log(user.name);
//     return user.name         //value return from here can be used by another then
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("TAsk is either resolved or rejected");
// })

//using async

// async function Promisetwo(){
//     try {
//         let response= await PromiseOne
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Promisetwo();

//using async to fetch api

const apiURL="https://api.github.com/users/hiteshchoudhary";

// async function getUserData(){
//     try {
//         let response= await fetch(apiURL)
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUserData();

//using fetch and then 

fetch(apiURL)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})



//Promise.all    return an array of promise

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
