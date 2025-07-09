// console.log("Getter Setter");


// class Person{
//     constructor(fname,lname,age){
//         this.firstname = fname;    // public 
//         this.lastname = lname;
//         this.age = age 
//     }

//     // Getter 
//     get getfullname(){
//         console.log(`Your name is ${this.firstname} ${this.lastname}.`);
//     }

//     // Setter 
//     set changefirstname(f){
//         this.firstname = f;
//     }

// }


// p1 = new Person("Raj","Shah",12);

// console.log(p1);
// console.log(p1.firstname);

// p1.getfullname;

// p1.changefirstname = "Ajay";

// p1.getfullname;


class Person{
    #firstname; // private 
    _lname; // protected 
    constructor(fname){
        this.#firstname = fname;
    }

    // getter 
    get accessname(){
        console.log(this.#firstname);
    }

    // setter 
    set changename(f){
        this.#firstname = f;
    }
};


var p1 = new Person("Raj");

console.log(p1);

p1.accessname;

p1.changename = "Rajesh";

console.log(p1);
p1.accessname;
