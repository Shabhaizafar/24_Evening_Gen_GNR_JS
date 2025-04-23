// Object : 
// It's a Collection of Properties(keys + values pair) or Methods(function).


// How to create  Empty Object : 
// var obj = {};
// console.log(obj);
// console.log(typeof obj);


// Filled Object : 
// var student = {
//     // key   +   value     =  property
//     firstname : "Raj",
//     lastname : "Shah",
//     age : null,
//     Gender : "Male"
// };

// How to Access Object in JS : 
// console.log(student);

//------------------------------------------------
// How to Access Property Value  : 

//1. Dot Notation : 
// console.log(student.firstname);
//2. Bracket Notation : 
// console.log(student[`lastname`]);

//------------------------------------------------
// How to Modify Property Value : 
//1. Dot Notation : 
// student.firstname = "Ajay";
//2. Bracket Notation : 
// student['age'] = 30;

// console.log(student);
//------------------------------------------------
// How to Add New Property : 
//1. Dot Notation : 
// student.gender = "Male";
//2. Bracket Notation : 
// student['ContactNo'] = 1234567890;

// console.log(student);

// -----------------------------------------------
// How to Remove Property : 
//1. Dot Notation : 
// delete student.Gender;
// //2. Bracket Notation : 
// delete student['age'];

// console.log(student.age);

// student = {};
// delete student;    // NOt Possible 
// console.log(student);


// ----------------------------
// How to access key's : 


// not working  :-
//1. basic for loop
//2. while
//3. do-while 

//4. foreach : work only with array 

//5. for-in :
//6. for-of :  not working


// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     gender : "Male",
//     age : 12,
//     100  : "Nothing"
// };
// console.log(obj);



// for (const key in obj) {
    // console.log(key,obj.key);
    // console.log(key,obj["key"]);
    // console.log(key,obj[key]);
    // console.log(key,typeof key);
// }