// Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of the current scope (either global or function scope) before code execution.


// var a; 


// console.log(b);  //error :  Cannot access 'b' before initialization
// // let b = 13;

// console.log(a);

// let const var   Hoisting or not?     : Yes 


// Main();


// function Main(){
//     console.log("Hello");
// }
// Main();


// Name Function are Hoisting or not : Yes.

// All Others : No

b();


let b = function (){
    console.log("Raj");
}

b();