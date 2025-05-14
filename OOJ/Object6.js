function Person(fname,lname,age,gender){
    this.firstname = fname;
    this.lastname = lname;
    this.Age = age;
    this.Gender = gender;
    Person.prototype.greet();

}

Person.prototype = {
    bioData : function (){
        console.log(`Your Name is ${this.firstname} ${this.lastname}.and Your age is ${this.Age}.`);
    },
    is18 : function (){
        return this.Age>=18;
    },
    greet : function (){
        console.log("Hello");
    }
};


const obj1 = new Person("Raj","Shah",12,"Male");
const obj2 = new Person("Rajesh","Sharma",22,"Male");
// console.log(obj1);
// console.log(obj2);

// obj1.bioData();
// obj2.bioData();

// console.log(obj1.is18());
// console.log(obj2.is18());

// obj1.greet();