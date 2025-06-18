// Array+Object destructuring.
// var arr  = [11,12,13,14,15];

// var v1 = arr[0];
// var v2 = arr[1];
// var v1 = arr[0];
// var v2 = arr[1];


// console.log(v1+v2);


// var [v1,,v2,...v3]  = arr;

// console.log(v1+v2);
// console.log(v3);




// ✅ Parameter Destructuring.
// function add(n1,n2){
//     console.log(n1+n2);
// }

// add(11,12);


// add(11,12,13);  //23


// function add(...arr){
//     var sum = 0;
//     arr.forEach(element => {
//         sum+=element;
//     });
//     console.log(sum);
// }

// add(11,12,13);

// add(11,12);



// ✅ Default Parameters.
// function add(n1,n2,n3){
//     console.log(n1,n2,n3);
// }
// add(1,2);


// function add(n1=0,n2=0,n3=0){
//     console.log(n1+n2+n3);
// }
// add(1,2);
// add(1,2,3);


// ✅ Rest Parameters.

// function add(n1=0,n2=0,...restparameter){
//     console.log(n1+n2);
//     console.log(restparameter);
// }
// add(1);


// ---------------------------------------------------------------------
// object destructuring  

// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     age : 12,
//     address : {
//         city : "GNR",
//         state : "Gujarat"
//     }
// };
// console.log(obj);
// console.log(obj.fname);
// console.log(obj.address);
// console.log(obj.address.city);


// var {fname:firstname,address:{city},...newobj} = obj;

// console.log(fname);
// console.log(firstname);

// console.log(city);
// console.log(newobj);
