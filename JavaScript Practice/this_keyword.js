let student={
    name:"Adeel",
    grade:"A",
    prop:this,   //will print Window obj since this access to parent object and here student parent is windows

    getName:function(){
        console.log(this);  //for normal function "this" refer to its calling object which is student here, so it will print student
        return this.name;  //and it will print student's name keyword
    },

    getGrade: ()=>{
        console.log(this); //for arrow func, "this" refer to parent object's scope
                       //  here parent object is student and its scope is window obj so it will print window objects
            
        return this.grade;  //undefined bcoz no grade in windows object
    },

    getInfo1: function(){
        setTimeout(()=>{ 
            console.log(this); //it will print student since in arrow func this refer to parent's-> parent's object
                                               //    this-> parent->setTimeout||->parent->function||->object->student
        },2000);        /*parent k parent ka object */
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);  //it will print Windows obj since for norm func, this refer to parent object and here the parent of func setInterval is object Windows
        },2000);                            /*parent ka object*/
    }
};