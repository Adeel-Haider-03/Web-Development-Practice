
let heading=document.querySelector('h1');

/* //if we do individually, can't do 1000 for all bcoz all can't be exucute after 1 sec 
setTimeout(()=>{        
    heading.style.color="red"
},1000)
setTimeout(()=>{        
    heading.style.color="green"
},2000)
setTimeout(()=>{        
    heading.style.color="blue"
},3000)
setTimeout(()=>{        
    heading.style.color="yellow"
},4000)
 */

/* function changeColor(color,delay,nextColorChange){    //nextColorChange == call back
    setTimeout(()=>{
        heading.style.color=color;
        if(nextColorChange){
            nextColorChange();        //if callback function is passed then execute that too
        }
    },delay)
};

//callbackhell
    changeColor("red",1000,()=>{  
        changeColor("green",1000,()=>{        //after red is executed,then after 1 sec change green
            changeColor("blue",1000,()=>[
                changeColor("yellow",1000)
            ])
        })
    }) */

//========================================================================================//

// now same using promises

function changeColor(color,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            heading.style.color=color;
            resolve("promise was fulfilled");
        },delay);
    }
)}

changeColor("red",1000)
.then(()=>{
    return changeColor("green",1000)
})
.then(()=>{
    return changeColor("blue",1000)
})
.then(()=>{
    return changeColor("yellow",1000)
})
.catch(()=>{
    console.log("error occured")
})