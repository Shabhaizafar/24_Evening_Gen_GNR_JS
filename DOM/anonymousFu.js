// anonymous : 
// settimeout :   run : one time only

// setTimeout(()=>{
//     document.write("Hello");
// },5000);

var div = document.querySelector('div');

// document.querySelector('button').onclick = function (){
//     setTimeout(()=>{
//         div.innerHTML =  (+div.innerHTML)-1;
//     },5000);
// }


// SetInterval : 
var data,date2;

document.querySelector('button').onclick = function (){
    data = setInterval(()=>{
        div.innerHTML =  (+div.innerHTML)-1;
    },1000);

    date2 = setInterval(() => {
        console.log(parseInt(Math.random()*10));
    }, 1000);
}

document.querySelectorAll('button')[1].onclick = function (){
    clearInterval(data);
    // clearInterval(date2);
    // console.log(data,date2);
}