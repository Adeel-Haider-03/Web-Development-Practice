/* 
function saveToDb(data){
    return new Promise((resolve,reject)=>{
        
    let InternetConnectionSpeed=Math.floor(Math.random()*10)+1;

    if(InternetConnectionSpeed>4){
        resolve();
    }
    else{
        reject();
    }
})}


saveToDb("data 1")
.then(()=>{
console.log("data 1 was saved")
    return saveToDb("data 2")
})
.then(()=>{
        console.log("data 2 was saved")
        return saveToDb("data 3")
})
.then(()=>{
            console.log("data 3 was saved")
})
.catch(()=>{
    console.log("weak internet connection")
})
 */
//========================================================================================//

//we can pass argument too

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        
    let InternetConnectionSpeed=Math.floor(Math.random()*10)+1;

    if(InternetConnectionSpeed>4){
        resolve("Success");
    }
    else{
        reject("failure");
    }
})}


saveToDb("data 1")
.then((result)=>{
console.log("data 1 was saved")
console.log(result)
    return saveToDb("data 2")
})
.then((result)=>{
        console.log("data 2 was saved")
        console.log(result)
        return saveToDb("data 3")
})
.then((result)=>{
            console.log("data 3 was saved")
            console.log(result)
})
.catch((error)=>{
    console.log("weak internet connection")
    console.log("error")
})