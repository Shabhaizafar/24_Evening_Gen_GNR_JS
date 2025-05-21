// console.log(document.querySelector('h1'));
// console.log(document.querySelector('h1').innerHTML);
// document.querySelector('h1').innerHTML = "Changed";



// How to Apply CSS using JS :

document.querySelector('h1').style.color= "red";
document.querySelector('h2').style.backgroundColor = "teal";
document.querySelector('h3').style.fontSize = '56px';



//  255





document.querySelector('button').onclick = function(){
    var clr = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
   document.body.style.backgroundColor = clr;

   document.querySelector('p').innerHTML = "Body : " + clr;
}