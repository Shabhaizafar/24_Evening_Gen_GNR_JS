//    - Promises, network request.
//    - Intro to promises.
//    - Microtask Queue.
//    - Function that returns promise.
//    - Promise and settimeout.
//    - Promise.resolve and more about then method.
//    - Convert nested Callbacks to flat code using promises.

// =======================================
// var mypromise = new Promise();
// =======================================
// reject,resolve  :  function
// name changed


// var mypromise = new Promise(function(resolve,reject){

// });

// var mypromise = new Promise((resolve,reject)=>{

// });

// function myFunction(resolve,reject){

// }

// var mypromise = new Promise(myFunction);

// console.log(mypromise);

// =======================================


// var mypromise = new Promise((resolve,reject)=>{
//     resolve();
//     reject();
// });

// mypromise.then(()=>{
//     console.log("success ");
// },()=>{
//     console.log("reject");
// })


// ==============================================
// var n = 2;
// var mypromise = new Promise((resolve,reject)=>{
//     if(n>10)
//         resolve();
//     else 
//         reject();
// });

// mypromise.then(()=>{
//     console.log("success ");
// },()=>{
//     console.log("reject");
// })

// ==========================================
// var n = 2;
// var mypromise = new Promise((resolve,reject)=>{
//     if(n>10)
//         resolve();
//     else 
//         reject();
// });

// mypromise.then(()=>{
//     console.log("success ");
// },()=>{
//     console.log("reject");
// }).then(()=>{
//     console.log("success ");
// },()=>{
//     console.log("reject");
// });



// var n = 2;
// var mypromise = new Promise((resolve,reject)=>{
//     if(n>10)
//         resolve();
//     else 
//         reject();
// });

// mypromise.then(()=>{
//     console.log("success ");
// },()=>{
//     n = 0;
//     console.log("reject");
// }).then(()=>{
//     console.log("success ");
// },()=>{
//     console.log("reject");
// });



// var n = 12;
// var mypromise = new Promise((resolve,reject)=>{
//     if(n>10)
//         resolve();
//     else 
//         reject();
// });

// mypromise.then(()=>{
//     console.log("success ");
// },()=>{
//     n = 0;
//     console.log("reject");
// }).finally(()=>{
//     console.log("Code Completed ");
// });




// =====================================================
// Promise.resolve and more about then method.

new Promise(function(resolve){
    // resolve();
    // Promise.resolve();
}).then(()=>{
    console.log("Success");
},()=>{
    console.log("Reject");
});




