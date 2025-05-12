const AllMethods = {
    bioData : function (){
        console.log(`Your Name is ${this.firstname} ${this.lastname}.and Your age is ${this.Age}.`);
    },
    is18 : function (){
        return this.Age>=18;
    },
    greet : function (){
        console.log("Hello");
    }
}

function Person(fname,lname,age,gender){
    var user = {};
    user.firstname = fname;
    user.lastname = lname;
    user.Age = age;
    user.Gender = gender;
    user.bioData = AllMethods.bioData;
    user.is18 = AllMethods.is18;
    
    return user;
}
const obj1 = Person("Raj","Shah",12,"Male");
const obj2 = Person("Rajesh","Sharma",22,"Male");
console.log(obj1);
console.log(obj2);

obj1.bioData();
obj2.bioData();

console.log(obj1.is18());
console.log(obj2.is18());

