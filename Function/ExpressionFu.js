// - without arg and without return type
var sayHello  = function (){
    console.log("Hello Everyone");
}

// sayHello();

// - with arg and without return type
let addition = function (n1,n2,n3){
    console.log("Addition : ",n1+n2+n3);
}
// addition(1,2,3);

// - without arg and with return type
const saySomthing  =  function (){
    return prompt("Enter  : ");
}
// console.log(saySomthing());

// - with arg and with return type

var result = function (marks){
    if (marks>35) {
        return "Pass !!";
    }else{
        return "Fail !!";
    }
}

// console.log(result(5));