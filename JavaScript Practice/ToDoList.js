
let tasks=[];
let choice;
do{
    choice=prompt("Enter Your Choice \n 1.list \n 2.add \n 3.delete \n 4.quit");
    choice= parseInt(choice);
switch(choice){
    case 1:
        for (let i of tasks){
            console.log(i,"\n");
        }
        break;

    case 2:
        let add= prompt("Enter task to do");
        tasks.push(add);
        console.log("task added successfully");
        break;
    case 3:
        let del=prompt("which task you want to delete");
        
            let index=tasks.indexOf(del);
            if (index!==-1){
                tasks.splice(index,1);
            }
            console.log("task deleted successfully");
        break;

    }
}
while(choice!==4);
console.log("Todo app quitted");