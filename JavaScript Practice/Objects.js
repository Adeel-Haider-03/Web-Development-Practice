let obj={
    name: "Adeel",
    Sec: "A",
    dep: "CS"
};
obj.uni="UET";    //adding new key to object
console.log(obj);

console.log(obj.name)
console.log(obj["name"]);



//Nested objects

let Nest={
adeel: {
    marks:25,
    place:"a"
},

khan:{
    marks:45,
    place:"b"
}
};

//array of objects

let arr=[
    {
    name: "A",
    class:"1"
    },

    {
        school:"B",
        sec:"2"
    },
    {
        nick:"D",
        bool:"true"
    }
]

console.log(arr[0].name)
console.log(Object.keys(arr));