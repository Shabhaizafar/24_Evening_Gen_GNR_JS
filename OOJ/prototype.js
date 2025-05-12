// Prototype  : 

function sayHello(){
    console.log("Hello");
}

sayHello();


sayHello.newData = "NewOne";
sayHello['newData2'] = "SecondOne";


sayHello();


console.log(sayHello.newData);

console.log(sayHello.prototype);

// var obj = {
//     fname : "Raj",
//     lname : "SHah"
// };

// console.log(obj);

// obj.gender = "Male";
// obj['contact'] = 1234567890;


// console.log(obj);