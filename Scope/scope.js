// Scopes : 
// 1. Global Scope.
// 2. Block Scope.
// 3. Lexical Scope.
// 4. Function Scope / Local Scope
// 5. Module Scope 



//1 Global Scope :

// magic();
// console.log(a);
// var a = 12;      // Global Declaraton 
// console.log(a);



// function magic(){
//     console.log("Everywhere!!");
// }

// magic();




// 2. Block Scope.
// var a = 12;
// {
//     let a = 13;
//     // let c = 13;
//     console.log("Inner :",a);
// }
// console.log("Outer : ",a);





// variable : 

//  var  : globally
//  let , const : block/local



// for (var i = 0; i < 5; i++) {
    
//     console.log(i);
// }
// console.log(i);


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }



// 3 Local Scope/Function Scope ; 

function Saysomthing(){
    var a = 12;
    console.log(a);
}
Saysomthing();


console.log(a);