let sqr=[1,2,3,4,5];

/* sqr.forEach(function printSquare(val){
    console.log(`square of ${val} = ${val*val}`)
});
 */


let square= (val)=>{
    console.log(`square of ${val} = ${val*val}`);
};

sqr.forEach(square); //we can also just pass function name if fun is created already