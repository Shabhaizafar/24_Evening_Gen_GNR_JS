// ✅ SetInterval and create little project with setInterval.
// var i = 0;
// setInterval(() => {
//     i++;
//     console.log(i);
// }, 1000);



var i = 0;
console.log("Hello");
for (let i = 0; i < 1000; i++) {
    console.log("inner");
}
var s = setInterval(() => {
    if (i==5) {
        clearInterval(s);
    }    
    i++;
    console.log(i);
}, 1000);


console.log("Everyone");