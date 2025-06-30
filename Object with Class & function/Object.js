/*
JavaScript is a high-level programming language that follows the ECMAScript standard. It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language, and is currently the most popular programming language in use.[1] JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications. JavaScript is also commonly used in server-side programming through platforms like Node.js,[2] or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers.
*/ 

// How to Create a Object :- 

// 1. Using Object Literal :    {}
// var obj1 = {
//     fname : "Raj"
// };


// 2. Using Object Constructor : 
// var obj2 = new Object();

// obj2.fname = "Ajay";
// console.log(obj2);


// 3. Using create Method : 

// var obj3 = Object.create({});

// obj3.gender = "male";
// console.log(obj3);


// 4. Using Object.assign() : 

// var obj4 = Object.assign({});
// obj4.Age = 13;
// console.log(obj4);


// Create a Single Object Using Function : 


function createObj(){
    var user = {};
    user.fname = "Raj";
    user.Age = 12;
    return user;
}

var obj5 = createObj();

obj5.gender = "Male";
console.log(obj5);
