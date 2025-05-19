// 🌟 OOP Concepts in JavaScript (and in general)
// Object-Oriented Programming (OOP) is based on several key principles that help organize code in a modular, reusable, and logical way. These concepts apply in JavaScript just like in other OOP languages, though the syntax may differ slightly.

// Here are the main OOP concepts with JavaScript examples:

// 1. Class
// A blueprint for creating objects.
// class User{
//     // constructor
//     constructor(){
//         this.x = ()=>{
//             console.log("Xyz");
//         }
//         console.log("Default");

//     }


//     xyz(){
//         console.log("Xyz");
//     }
// };

// 2. Object
// An instance of a class.
// const obj = new User();
// console.log( obj);
// console.log(typeof obj);
// const obj2 = new User();
// obj.xyz();

// 3. Inheritance
// A class can inherit from another class (parent-child relationship).
// 1. single-level 
`
        class Father{
            property(){
                console.log("Gold : 100000kg");
            }
        }

        class Child extends Father{
            Toy(){
                console.log("50 Toys");
            }
        };

        const c1 = new Child();
        c1.Toy();

        c1.property();
`;
`
// class Father{
//     constructor(fname){
//         this.Fathername = fname;
//     }
// };
// var f1 = new Father("Rajesh");
// console.log(f1.Fathername);
// var f2 = new Father("Raj");
// console.log(f2.Fathername);

// class Child {
//     constructor(cname,fname){
//         this.Childname = cname;
//         this.Fathername = fname;
//     }
// };

// class Child extends Father{
//     constructor(cname,fname){
//         super(fname);
//         this.Childname = cname;
//     }

//     Fullname(){
//         console.log(My Name is ${this.Childname} ${this.Fathername}.);
//     }
// };


// const c1 = new Child("Raj","Rajesh");

// console.log(c1.Fathername,c1.Childname);
// c1.Fullname();
`
// 2. multi-level
// class GrandFather {
//     House() {
//         console.log("10 Houses");
//     }
// }

// class Father extends GrandFather{
//     property() {
//         console.log("Gold : 100000kg");
//     }
// }

// class Child extends Father{
//     Toy(){
//         console.log("50 Toys");
//     }
// }

// const c1 = new Child();
// c1.Toy();
// c1.property();
// c1.House();

// 3. multiple
// 4. Hierarchical
// 5. Hybrid(mix)



// 4. Abstraction
// Hiding complex logic and showing only necessary details.

// 5. Encapsulation
// Wrapping data (properties) and methods (functions) into a single unit, and hiding the internal state from the outside world.

// 6. Polymorphism
// Different classes can define the same method in different ways.





/*
Single-level  : 

Create a class Device with properties brand and batteryLife, and a method turnOn().
Then, create a subclass Laptop that adds a property screenSize.
Demonstrate using an instance of Laptop.



Multi-level 
Create a class Building with a property address and method openDoor().
Then create OfficeBuilding that adds a property numberOfFloors.
Finally, create TechCompanyOffice that adds a method hostMeeting().
Use an instance of TechCompanyOffice to test all features.
*/