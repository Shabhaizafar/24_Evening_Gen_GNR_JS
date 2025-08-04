// var id;
// document.querySelectorAll('button')[0].addEventListener('click',function(){
//     id = setInterval(() => {
//         document.querySelector('span').innerText= +(document.querySelector('span').innerText)+1;
//     }, 1000);
// });
// document.querySelectorAll('button')[1].addEventListener('click',function(){
//     clearInterval(id);
// });


var worker;
document.querySelectorAll('button')[0].addEventListener('click',function(){
    if(!worker){
        worker =  new Worker('worker2.js');
         worker.onmessage = function (e) {
            
            document.querySelector('span').innerText = e.data;
        };
    }
});


document.querySelectorAll('button')[1].addEventListener('click',function(){
    if(worker){
        worker.terminate();
    }
});































