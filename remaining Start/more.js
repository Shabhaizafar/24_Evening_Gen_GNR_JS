// asynconouns vs synconouns




console.log("This is First Line");



    setTimeout(() => {
        console.log("Inner SetTimeOut 1");
    }, 5000);    


console.log("This is Last Line");

for (let i = 0; i <10000; i++) {
    console.log(i);
}

setTimeout(() => {
     console.log("Inner SetTimeOut 2");
}, 0);