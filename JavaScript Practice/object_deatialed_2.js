let obj1={
    1: "A",
    2: "B"
}

let obj2={
    3: "C",
    4: "D"
}

// let obj3={...obj1,...obj2}  //combining objects using spread operator

let obj3=Object.assign({},obj1,obj2)   // using assign()
console.log(obj3);

console.log(Object.values(obj1))
console.log(Object.keys(obj1))
console.log(Object.entries(obj1))

console.log(obj1.hasOwnProperty("name"));