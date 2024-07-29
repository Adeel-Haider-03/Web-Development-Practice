let num=Math.random();


Math.floor(Math.random()*10);  //0-9
Math.floor(Math.random()*10)+1; //1-10

// Math.floor(Math.random() * (max - min) ) + min;    returns a random number between min (included) and max (excluded):

// Math.floor(Math.random() * (max - min + 1) ) + min;  returns a random number between min and max (both included) :

//Q1
//1-5  5 exclusive
console.log(Math.floor(Math.random()*(5-1)+1));

//1-5  5 included
console.log(Math.floor(Math.random()*(5-1+1)+1)); //(max-min+1)+min

//20-25
console.log(Math.floor(Math.random()*(5)+20)); //(max-min)+min
                                                //(25-20)=5   (5)+20