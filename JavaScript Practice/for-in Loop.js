//used for objects and arrays

let student={
    name:"Adeel",
    age:20,
    place:"Peshawar",
    isAdult:true,
};

//will print key , i.e name,age place and not the value in it
for(let i in student){
    console.log(i);
}

//to print the value , we can use

for(let i in student){
    console.log("key=",i , "Value=",student[i]);

}

//to print specific value of object we use student["keyname"]

// console.log(student["age"]);

            //OR

// console.log(student.age);