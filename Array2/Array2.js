// String Method :  

// var str = "Royal Technosoft p ltd";

// var newData =  str.split(' ');
// var newData =  str.split('');
 

// console.log(str);
// console.log(newData);
//-----------------------------------------------------------//
// Methods of Array : 
// 1.push  2.pop 3.shift  4.unshift



//-----------------------------------------------------------//
// Extra  Methods : 
// 1. reverse : 
// var arr = [11,12,13,14];
// console.log(arr);

// console.log(arr.reverse());
//-----------------------------------------------------------//

// 3. join  :  default join with ,
// var str = ["Royal","techno"];
// console.log(str);
// console.log(str.join("|"));
//-----------------------------------------------------------//
// 2. fill : 
// var arr = [11,12,13,14,15];
// console.log(arr);
// console.log(arr.fill(0));

// console.log(arr.fill(0,2));
// var ans = arr.fill(0,2,4);
// console.log(ans);


//-----------------------------------------------------------//
// 8. find  : 
// var n = 13;

// Name Function 
// function newFu(value,index,self){
//     if (value==n)
        // return ;
    // if (value==n) {
    //     return ;
    // }
// }
// var arr =  [11,12,13,14,15];
// console.log(arr);

// var ans = arr.find(newFu);

//Expression : 
// var ans = arr.find(function (v,i,a){
//     return v==n;
// });
// console.log(ans);

//Arrow Function : 
// var ans = arr.find( (v,i,a)=>{
//     return v==n;
// });
// console.log(ans);

//-----------------------------------------------------------//
// Boolean : true/false 
// 9. every 
// 10. some 


// return  true false : 
// print : 1st value 
// var arr = [234,74,24,7,21000,1,63];
// console.log(arr);


// var ans1 = arr.every((v,i)=>{
    // return v>10;
    // if(v>10){
    //     console.log(v,i);
    // }
// });

// console.log(ans1);
// var ans2 = arr.some((v)=>{
//     // return v>10;
//     return v>1000;
// });
// console.log(ans2);
//-----------------------------------------------------------//
// 4. foreach : 
// No Return : 
// var arr = [234,74,24,7,21000,1,63];
// console.log("For Each : ");
// var ans3 = arr.forEach((element,index)=>{
//     return element;
// });
// console.log(ans3);

// // 5. map : 
// //return : 
// console.log("Map : ");
// var ans1 = arr.map((element,index)=>{
//     return element>30;
// });
// console.log(ans1);

// // 6. filter
// console.log("Filter : ");
// var ans2 = arr.filter((element,index)=>{
//     return element>30;
// });
// console.log(ans2);

// --------------------------------------------------------------- //

// 7. reduce




/*
// function Expression  : 
 // 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
 // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 
*/

// var isPeli = function (str){
//     if(str === str.split('').reverse().join('')){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// isPeli("madam");