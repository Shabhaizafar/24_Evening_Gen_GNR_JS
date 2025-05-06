// Main();
// console.log("Outer1 A : ",a); 
// var a = 1;
// function Main(){
//     console.log("Main A : ",a);
//     var a = 100;
// }
// console.log("Outer2 A : ",a); 




// Main();
// console.log("Outer1 A : ",a); 
// var a = 1;
// var Main = function (){
//     console.log("Main A : ",a);
//     var a = 100;
// }
// console.log("Outer2 A : ",a); 



// console.log("Outer1 A : ",a); 
// var a = 1;
// var Main =  ()=>{
//     console.log("Main A : ",a);
//     var a = 100;
// }
// Main();
// console.log("Outer2 A : ",a); 



//Lexical Scope : 

// var a = 10;
// console.log("Global A1 : ",a);

// function Outer(){
//     console.log("Outer1 A : ",a);
//     Inner();
//     console.log("Outer2 A : ",a);
//     var a = 100;
//     function Inner(){
//         this.a++;
//         console.log("Inner A : ",a);
//     }
// }
// Outer();
// console.log("Global A2 : ",a);



// var a = 12;
// console.log("Global A : ",a); // 12
// function Main(){
//     console.log("Main A : ",a);// un // 12
//     this.a++;
// }
// Main();
// console.log("Global A2 : ",a); // 12//13



// const a = 12;
// console.log("Global A : ",a); //12
// function Main(){
//     console.log("Main A : ",a);//12
//     this.a++;
// }
// Main();
// console.log("Global A2 : ",a); //12


// global : var 
// block/local :  let/const



//////////////////////////////////////////
var a = 13;
let b = 14;
const c = 15;
function Main(x,y,z){
    console.log("Value X : ",x);
    console.log("Value Y : ",y);
    console.log("Value Z : ",z);
    var Arrowfu = (l,m,n)=>{
        console.log("Value L : ",l);
        console.log("Value M : ",m);
        console.log("Value N : ",n);
        this.x = 300;
    }
    this.a = 100;
    this.b = 200;
    console.log("Value X : ",x);
    return Arrowfu(x,y,z);
}
var ans = Main(a,b,c);
console.log("Value ANS : ",ans);
console.log("Value a : ",a);
console.log("Value b : ",b);
console.log("Value c : ",c);