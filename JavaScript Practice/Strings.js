// strings method

let str="Adeel Haider";
str.toUpperCase();
console.log(str); /* //we will expect to convert to upperCase but it is not bcoz strings are immutable,it mean you can't change original string , ou have to store it in another var to perform changes or reassign to org variable and make changes*/

let newString=str.toUpperCase();
console.log(newString);

//Or

str=str.toUpperCase();
console.log(str);

//trim method (will trim left and right spaces not in between)

let s="    Apna   College   JS  ";
console.log(s.trim());

console.log(s.slice(5,10));  //return part of a string

console.log(s.charAt(6));

// str.replace(oldvalue,newvalue);
//str1.concat(str2)

let str1="Hellolololo";
str1=str1.replace("lo","bb");  //will replace one time only (sirst lo with bb)
console.log(str1);

console.log(str1.replaceAll("lo","bb"));

