// addEventListener :
// document.querySelector('button').onclick = function(){
//     console.log('clicked');
// }



// document.querySelector('button').addEventListener(event,function);

// document.querySelector('button').addEventListener('click',function(){
//     console.log("Clicked");
// });


// event bubbling vs event capturing vs event delegation


// event bubbling  : 
// var a = 0;

// document.body.addEventListener('click',function(){
//     a=10;
//     console.log("Body Triggered !!");
//     console.log(a);
// });

// document.querySelector('section').addEventListener('click',function(){
//     console.log("Section Triggered !!");
// });

// document.querySelector('div').addEventListener('click',function(){
//     console.log("Div Triggered !!");
// });

// document.querySelector('button').addEventListener('click',function(){
//     console.log(a);
//     console.log("Button Triggered !!");
// });



// event capturing: 
// var a = 0;

// document.body.addEventListener('click',function(){
//     a=10;
//     console.log("Body Triggered !!");
//     console.log(a);
// },capture = true);

// document.querySelector('section').addEventListener('click',function(){
//     console.log("Section Triggered !!");
// });

// document.querySelector('div').addEventListener('click',function(){
//     console.log("Div Triggered !!");
// },capture = true);

// document.querySelector('button').addEventListener('click',function(){
//     console.log(a);
//     console.log("Button Triggered !!");
// });


// bubbling : closest event to Farthest Event 
// capturing : farthest event to closest Event 




// ----------------
// document.body.addEventListener('click',function(){
//     console.log("Body Triggered !!");
// });

// document.querySelector('section').addEventListener('click',function(){
//     console.log("Section Triggered !!");
// });

// document.querySelector('div').addEventListener('click',function(){
//     console.log("Div Triggered !!");
// });

// document.querySelector('button').addEventListener('click',function(event){
//     event.stopPropagation();
//     console.log("Button Triggered !!");
// });


document.body.addEventListener('click',function(){
    console.log("Body Triggered !!");
},capture = true);

document.querySelector('section').addEventListener('click',function(){
    console.log("Section Triggered !!");
});

document.querySelector('div').addEventListener('click',function(){
    event.stopPropagation();
    console.log("Div Triggered !!");
});

document.querySelector('button').addEventListener('click',function(event){
    event.stopPropagation();
    console.log("Button Triggered !!");
});