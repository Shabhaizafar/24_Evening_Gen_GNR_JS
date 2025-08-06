//    - Error handling in XHR requests.

// var xhr = new XMLHttpRequest();

// xhr.open("GET","https://jsonplaceholder.typicode.com/posts/200");


// xhr.onload = function (data){
//     if(data.target.status>=200 && data.target.status<=299){
//         console.log(data.target.response);
//         console.log(data.target.status);
//     }else{
//         console.log("Error : ",data.target.status);
//     }
// }

// xhr.send();


//    - XHR request Chaining.

// function main(url){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET",url);
//     xhr.onload = function (data){
//         if(data.target.status>=200 && data.target.status<=299){
//             console.log(data.target.response);
//             var data2 =JSON.parse(data.target.response);
//             main(`https://jsonplaceholder.typicode.com/users/${data2.id}`);
//         }else{
//             console.log("Error : ",data.target.status);
//         }
//     }
//     xhr.send();
// }
// main("https://jsonplaceholder.typicode.com/posts/1");




//    - Promisifying XHR requests and chaining using then method.


// function main(url) {
//     return new Promise(function (success, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = function (data) {
//             if (data.target.status >= 200 && data.target.status <= 299) {
//                 success(data.target.response);
//             } else {
//                 reject(data.target.status);
//             }
//         }
//         xhr.send();
//     }).then((data) => {
//         console.log(data);
//         var data2= JSON.parse(data);
//         main(`https://jsonplaceholder.typicode.com/users/${data2.id}`);
//     },(err)=>{
//         console.log("Error",err);
//     });
// }

// main("https://jsonplaceholder.typicode.com/posts/1");



//    - Consume Promises with async and Await.



// async function main() {
//     try {
//         console.logd(12/0);
//     } catch (error) {
//         // console.log(error);
//     }
// }
// main();