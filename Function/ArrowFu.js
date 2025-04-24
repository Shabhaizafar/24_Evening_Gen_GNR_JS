// - without arg and without return type
// var sayHello  =  ()=>{
//     console.log("Hello Everyone");
// }
// var sayHello  =  ()=> console.log("Hello Everyone");  // valid
// var sayHello  =  => console.log("Hello Everyone");  // invalid

// sayHello();

// - with arg and without return type
// let addition =  (n1,n2,n3)=>{
//     console.log("Addition : ",n1+n2+n3);
// }
// let addition =  (n1,n2,n3)=> console.log("Addition : ",n1+n2+n3);
let addition =  n1 => console.log("Addition : ",n1);
// addition(1,2,3);
// addition(1);


// - without arg and with return type
// const saySomthing  =   ()=> return prompt("Enter  : ");   // invalid
// const saySomthing  =   ()=>{
//     return prompt("Enter  : ");
// }
// console.log(saySomthing());

// - with arg and with return type

// var result =  (marks)=>{
//     if (marks>35) {
//         return "Pass !!";
//     }else{
//         return "Fail !!";
//     }
// }

// console.log(result(5));


/*

 // function Expression  : 
 // 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
 // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 
 
 
 // Function Arrow
 // 3. Write a JavaScript function that generates all combinations of a string.
 // Example string : 'dog'
 // Expected Output : d,do,dog,o,og,g 

 // Example : Java
             ; J,Ja,Jav,Java,a,av,ava,v,va,a
*/