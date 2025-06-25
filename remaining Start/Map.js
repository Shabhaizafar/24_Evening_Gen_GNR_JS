// set >>> array 

// map >>> object (key+values pair)


// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     1234 : 12,
//     fname : 'Ajay'
// };

// console.log(obj);

// for (const key in obj) {
//     console.log(key,typeof key);
// }


// how to create an empty Map : 


var mymap = new Map();

mymap.set("fname","Raj");
mymap.set("lname","Shah");
mymap.set([11,12],12);
mymap.set("fname","Ajay");

console.log(mymap);

// mymap.forEach((value,key)=>{
//     console.log(value,key,typeof key);
// });

// for (let i = 0; i < mymap.size; i++) {
//     console.log(i,mymap.g);
// }


// console.log(mymap.get(124));
// 
// console.log(mymap.has("fnamewertyui"));

// mymap.delete("lname");
// mymap.clear();
// console.log(mymap);


console.log(mymap.entries());
console.log(mymap.keys());
console.log(mymap.values());










