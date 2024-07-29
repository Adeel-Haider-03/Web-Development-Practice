let items=[250,645,300,900,50];

for (let i of items){   

let offer=(i/10);
i=i-offer;

}
console.log(items);  // it will give same array

//because for of loop give us value and not the index, and to change the value in array we need to know index
//so instead we need to use other loop i.e for,while etc

//we still can do it by indirectly tracing index

/* let items=[250,645,300,900,50];
console.log(`before discount ${items}`);
let indx=0;
for (let i of items){   

let offer=(i/10);
items[indx]=items[indx]-offer;
indx++
}
console.log(`After discount ${items}`);
 */

//now using for loop
/* let items=[250,645,300,900,50]; 
for (let i=0; i<items.length; i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
}

console.log(items); */