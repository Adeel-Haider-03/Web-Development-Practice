// singleton  ----- when we create object with new method
// Object.create

// object literals

const mySym = Symbol("key1")      //symbol data type


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                  //  we declare symbol within square bracket, if we don't it won't give error but will behave as string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])         //we have to use square method to access in some cases, for example here
// console.log(JsUser[mySym])              // and here, we can't access with dot method

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                   freeze prevent changes to object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());