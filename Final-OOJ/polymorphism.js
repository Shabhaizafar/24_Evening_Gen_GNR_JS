// class Person{
//     greet(){
//         console.log("Hello Eeryone !!!");
//     }
// };


// class Child extends Person{
//     greet(){
//         console.log("Child Class");
//     }
// };


// const c1 = new Child();
// console.log(c1);


// c1.greet();



// class Person{
//     // add(n1,n2){
//     //     console.log(n1+n2);
//     // }
//     add(n1,n2,n3=0){
//         console.log(n1+n2+n3);
//     }
// };

// p1 =new Person();
// p1.add(12,13);
// p1.add(12,13,14);

// ------------------ i-------------------------------
// class Person{
//     constructor(){
//         // this.Personname = "Rajesh";
//         console.log("Person Constructor");
//     }
// };

// class Child{
//     constructor(){
//         console.log("Child Constructor1");
//     }
//     constructor(){
//         console.log("Child Constructor2");
//     }
// };

// const c1 = new Child();




class A{
    greet(){
        console.log("Class A");
    }
};

class B{
    greet(){
        console.log("Class B");
    }
};


function main(user){
        user.greet();
}

main(new A());
main(new B());











