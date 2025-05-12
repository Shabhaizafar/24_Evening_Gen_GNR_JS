// Create a Multiple  Object : 

// function createObj(f,a){
//     var user = {};
//     user.fname = f;
//     user.Age = a;
//     return user;
// }

// var u1= createObj("Raj",12);
// var u2= createObj("Ajay",20);
// console.log(u1);
// console.log(u2);


function Person(fname,lname,age,gender){
    var user = {};
    user.firstname = fname;
    user.lastname = lname;
    user.Age = age;
    user.Gender = gender;
    user.bioData = function (){
        console.log(`Your Name is ${user.firstname} ${user.lastname}.and Your age is ${user.Age}.`);
    };
    user.is18 = function (){
        return user.Age>=18;
    };
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