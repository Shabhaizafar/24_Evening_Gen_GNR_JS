// Fill : 
// 1) Write a program to create an array with undefined values and use fill() to replace them with a default string.

// var arr = [undefined,undefined,undefined,undefined,undefined,undefined];
// var  arr = [undefined];
// console.log(arr);
// arr.fill("Royal",0,10);
// console.log(arr);



// 2) Create a 2D array (matrix) and use fill() to populate each row with the value 0.



// arr[2][2]   =   [  
//         [11,12],
//         [13,14]
//   ]

// arr[3][3]   =   [  
//     [11,12,13],
//     [13,14,15],
//     [34,45,56]
// ]


var row = 3;
var col = 3;
var arr2D = [];


for (let i = 0; i < row; i++) {
    var temparr= [];
    for (let j = 0; j < col; j++) {
        temparr.push(undefined);
    }   
    arr2D.push(temparr);
}

//Method: 1
// arr2D.map((e)=>{
//     return e.fill(0);
// });



//Method: 2
// for (let i = 0; i < arr2D.length; i++) {
//     arr2D[i].fill(0);
// }

// console.log(arr2D);




// var arr = [11,12,13];

// console.log(arr);

// arr.fill(0);

// console.log(arr);
