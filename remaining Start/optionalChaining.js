// Optional chaining : 

var  person = {
    fname : "Raj",
    lname : "Shah",
    // age : 12,
    hobbies : ["Cricket","Fottball"],
    address :{
        city : "AMD",
        // state : "Gujarat",
        // nation : "India"
    }
};

console.log(person);

console.log(person.fname);

console.log(person.address);

// console.log(person.address.nation);



// console.log(person.age); // undefined


// console.log(person.address.state);  // undefined

// console.log(person.address.city);  //  undefined


console.log(person?.address?.nation);












