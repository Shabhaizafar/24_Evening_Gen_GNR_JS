// ✅ Is Javascript a synchronous or asynchronous programming language ?.
// JS : synchronous 

// console.log("Hello");
// console.log("Everyone");


console.log('Hello');
setTimeout(() => {
    console.log("After 4000ms ");
}, 4000);

setTimeout(() => {
    console.log("Everyone : 2000");
}, 2000);