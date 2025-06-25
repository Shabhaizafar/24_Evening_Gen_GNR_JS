// Object.assign  : 


var obj1  = { 
    key1 : "value1",
    key2 : "value2"
};

var obj2  = { 
    key2 : "newone",
    key3 : "value3",
    key4 : "value4"
};

console.log(obj1);
console.log(obj2);



// var newobj = Object.assign(obj1,obj2,{fname : "Raj"});

// Object.assign(target,sources...);


var newobj = Object.assign({},obj1,obj2,{fname : "Raj"});
console.log(newobj);



console.log(obj1);
console.log(obj2);