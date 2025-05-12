// Object Literal :
// var obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// };

// var obj2 = {
//     key3 : "value3"
// };

// console.log(obj1);
// console.log(obj2);

// console.log(obj1.key1);
// console.log(obj2.key3);


// console.log(obj1.key1);
// console.log(obj2.key1);



// Using Object.create : 
var obj1 = {
    key1 : "value1",
    key2 : "value2"
};
var obj2 = Object.create(obj1);

obj2.key3 = "Value3";
console.log(obj1);
console.log(obj2);


console.log(obj1.key1);
console.log(obj2.key1);


// proto :  object
console.log(obj2.__proto__);

// console.log(obj2[[prototype]]);




// "prototype" and "proto" both are different.
// [[prototype]] and "proto" both are same.