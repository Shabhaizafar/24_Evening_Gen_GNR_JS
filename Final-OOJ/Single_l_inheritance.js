// Single Level : 
class Person{
    constructor(fname,lname,work){
        this.firstname = fname;
        this.lastname = lname;
        this.work = work;
    }

    run(){
        console.log("I can Run !!");
    }
}

class Student extends Person{
    constructor(fname,lname,work,grade){
        super(fname,lname,work);
        this.standard = grade;
    }
    // run(){
    //     console.log("Running");
    // }
};

var s1  = new Student("Raj","Shah","student","7th");
console.log(s1);
s1.run();
// Multi Level 
// Multiple          :    Directly not Possible     :  hard way    : last
// Heirarchical
// Hybrid 

/*
    Method Overload vs Method Override
    Constructor Overload vs Constructor Override
*/



