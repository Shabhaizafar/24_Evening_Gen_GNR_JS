//  - Fetch API.
//    - Error Handling in Fetch API.


// fetch("url")  => response : promise 
// console.log(fetch("https://jsonplaceholder.typicode.com/users"));





//fetch("url").then((data)=>{})  data : response : {Basic Info} : object 
// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data);
// });




// json 
// fetch("url").then((data)=>{ data.json() })   =>  data.json()  : promise
// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data.json());
// });




// fetch("url").then((data)=>{ data.json().then((data2)=>{data2}); })  =>    data2  : final response 

// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     data.json().then((data2)=>{
//         console.log(data2);
//     });
// });



// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     data.json().then((data2)=>{

//         console.log(data2);
//     });
// });




// ===========================================
// fetch("users.json").then((data)=>{
//     data.json().then((data2)=>{
//         console.log(data2);
//     })
// });


// fetch("async.js").then((data)=>{
//     data.json().then((data2)=>{
//         console.log(data2);
//     })
// });



fetch("temp.txt").then((data)=>{
    data.json().then((data2)=>{
        console.log(data2);
    })
});











