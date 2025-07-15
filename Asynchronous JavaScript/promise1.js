var a = Boolean(prompt("Enter Value : "));

var mypromise = new Promise(function (success,reject){
    if(a){
        success("Successfully");
    }
    reject("Reject");
});

// console.log(mypromise);

mypromise.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
});