/* 
// async function by default return promise whether we write or not

async function greet(){
  //  throw("404 not found")
    return "hello world";     //return a promise
}

let demo = async ()=>{      //return a promise    arrow func as async
    return 5;
}     


greet()
.then((result)=>{
    console.log("promise fulfilled")
    console.log(result)
})
.catch((err)=>{
    console.log("rejected",err)
})
 */
let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                let num=Math.floor(Math.random()*5);
                if (num>3){
                    reject("promise was rejected")
                }
                h1.style.color=color;
                    resolve("promise was fulfilled");
                    console.log(`color was changed to ${color}`)
                },delay);
        
    }
)}

async function demo(){

try {                                   //using try and catch so incase any promise is rejected rest of code blck still execute
    await changeColor("green",1000)
    await changeColor("red",1000)
    await changeColor("blue",1000)
    await changeColor("yellow",1000)
    await changeColor("pink",1000)
} catch (error) {
    console.log(error);
}

    let a=5;
    console.log(a);
    let newNum=a+6;
    console.log(newNum)
}

demo();