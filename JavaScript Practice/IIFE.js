// immediately invoked function Expression

// sometime we want to execute fucntion by itself so we use IIFE
// important reason, we want to avoid problem created to global scope variable pollution---------interview reason


// we declare function inside parenthesis and call it then

// (function) ()

(function Adeel(){              //named IIFE
    console.log("Adeel")
})();

//if we try to execute two IIFE we need to to use semi colon to stop the execution of first as it is not defined where to stop
// so it give error

(function name(){
    console.log("Haider");
})();

//using arrow function

(()=> console.log("Hello world"))() ;  //un-named IIFE


//passing argument
((name)=>console.log(name))("John")
