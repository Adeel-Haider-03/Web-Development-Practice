
function saveToDb(data,success,failure){

    let InternetConnectionSpeed=Math.floor(Math.random()*10)+1;

    if(InternetConnectionSpeed>4){
        success();
    }
    else{
        failure();
    }
};

//callback hell

    saveToDb("data 1",()=>{
        console.log("success: data 1 was saved");
        saveToDb("data 2",()=>{                     //upon saving data 1 we call func to save another data
            console.log("success 2 : data 2 was saved")
            saveToDb("data 3",()=>{                         ////upon saving data 2 we call func to save another data
                console.log("success 3 : data 3 was saved")
            },()=>{
                console.log("error ,weak connection for data 3")
            })
        },()=>{
            console.log("error ,weak connection for data 2")
        })
    },()=>{
        console.log("error ,weak connection for data 1")
    })