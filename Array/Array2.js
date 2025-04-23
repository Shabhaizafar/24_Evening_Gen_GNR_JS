// console.log('Hello');

// var arr = [11,12,13,14];
// arr.pop();
// console.log(arr);

// let arr2 = [11,12,13,14];
// arr2.pop();
// console.log(arr2);

// const arr3 = [11,12,13,14];
// arr3.pop();
// console.log(arr3);


// Primitive Datatype : 
// Number,string,boolean,undefined,BigInt

// Refference Datatype : 
// function,Object


// var n1 = 12;
// var n2 = n1;

// console.log("Value N1 : ",n1);
// console.log("Value N2 : ",n2);
// n1++;
// console.log("Value N1 : ",n1);
// console.log("Value N2 : ",n2);


// var arr1 = [11,12,13];
// var arr2 = arr1;
// console.log("Array 1 : ",arr1);
// console.log("Array 2 : ",arr2);
// arr1.push("NewData");
// arr2.shift();
// console.log("Array 1 : ",arr1);
// console.log("Array 2 : ",arr2);

// const a1 = [1,2,3];



// var arr = [11,12,13];
// console.log(arr);
// var arr = ["Zafar"];
// console.log(arr);


// const arr = [11,12,13];
// console.log(arr);
// arr = [11,12,13];
// console.log(arr);


// const arr = [11,12,13];
// console.log(arr);
// delete arr;
// arr.pop();
// delete arr[1];
// arr[1]
// console.log(arr);
// const arr = [11,12,13,14,15];
// How To Access Array Value : 
// Using Array Bracket : 

// console.log(arr[1]);


// How to Modify  Value : 
// arr[3] = "Zafar";

// How TO Add New Value : 
// arr[13] = "NewData";
// console.log(arr);


// How to Delete/Remove Data : 
// delete arr[4];
// delete arr[24];
// console.log(arr);

// const arr = [11,12,"Royal",13,14];
// console.log(arr);
// Loops : 
//1. For-each Loop : 
// arr.forEach((element,index,a) => {
//     console.log(element,typeof index,a);
// });


//2. For-in Loop :     index format 
// for (const key in arr) {
//    console.log(key,arr[key]);
//     console.log(key,typeof key);
// }

//3. For-of Loop :   values

// for (const element of arr) {
//     console.log(element);
// }



// ===============================================
// Clone Array : 


// var arr1 = [11,12,13];
// var arr2 = arr1;
// console.log("Array 1 : ",arr1);
// console.log("Array 2 : ",arr2);

// arr1.push("NewData");
// arr2.shift();
// console.log("Array 1 : ",arr1);
// console.log("Array 2 : ",arr2);



// 1 using Concat : 
// var arr1 = [11,12,13];
// var arr2 = arr1.concat();

// console.log(arr1);
// console.log(arr2);
// arr1.push("NewData");
// arr2.unshift("FirstData");
// console.log(arr1);
// console.log(arr2);
//----------------
// var arr1 = [11,12,13];
// var arr2 = arr1.concat(["Zafar","Raj","Sha"]);

// console.log(arr1);
// console.log(arr2);
// arr1.push("NewData");
// arr2.unshift("FirstData");
// console.log(arr1);
// console.log(arr2);

// 2 using Slice : 
// var arr1 = [11,12,13];
// var arr2 = arr1.slice();

// console.log(arr1);
// console.log(arr2);
// arr1.push("NewData");
// arr2.unshift("FirstData");
// console.log(arr1);
// console.log(arr2);
//--------------
// var arr1 = [11,12,13];
// var arr2 = arr1.slice(0,2);

// console.log(arr1);
// console.log(arr2);
// arr1.push("NewData");
// arr2.unshift("FirstData");
// console.log(arr1);
// console.log(arr2);

// 3 Using Spread Operator : ...

// var arr1 = [11,12,13];
// var arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);
// arr1.push("NewData");
// arr2.shift();
// console.log("Array 1 : ",arr1);
// console.log("Array 2 : ",arr2);

