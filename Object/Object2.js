// Object(reference Datatype) Clone :  (Spread Operator)

// var obj1 = {
//     fname : "Raj",
//     lname : "Shah"
// };
// var  obj2 = obj1;

// console.log(obj1);
// console.log(obj2);


// obj1.gender = "Male";

// console.log(obj1);
// console.log(obj2);


// var obj1 = {
//     fname : "Raj",
//     lname : "Shah"
// };

// var obj2 = {...obj1};

// console.log(obj1);
// console.log(obj2);
// obj1.gender = "Male";

// console.log(obj1);
// console.log(obj2);



// Object Destructuring : 


// var obj1 = {
//     fname : "Raj",
//     lname : "Shah",
//     gender : "Male",
//     Age : 12,
//     Contact : 123456789,
//     Address : {
//         city : "GNR",
//         state : "Gujarat",
//         nation : "India"
//     }
// };
// console.log(obj1);


// // console.log(obj1.gender);
// // console.log(obj1.Address.city);

// var {gender,Address : {city},...newObj} = obj1;


// console.log(gender); // 
// console.log(city);

// console.log(newObj);