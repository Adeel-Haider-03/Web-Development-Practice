
// to read data from JSON, converting JSON into JS Object //

let JSONvalue=`{"Name":"Adeel","Marks":100}`;
console.log(JSONvalue);    //print as string
//console.log(JSONvalue.Name);  //it will show undefined because we are dealing with JSON data, it is not JS object



let value=JSON.parse(JSONvalue);
console.log(value);               //print as object
console.log(value.Name); //output= Adeel



//  convert JS object in JSON  //
let obj={
    car:"BMW",
    model:1999,
    price:"$2M"
}

let objToJSON=JSON.stringify(obj);
console.log(objToJSON);        // it will print as JSON string