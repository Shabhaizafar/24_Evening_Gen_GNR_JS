// function saySomthing(){
//     console.log("Hello");
//     console.log("Everyone");
//     console.log("Welcome");
// }

// saySomthing();

/*
Valid Syntax : 

1.
function * functionName(){
    code;
}


2.
function* functionName(){
    code;
}

3.
function *functionName(){
    code;
}

4.
function*functionName(){
    code;
}
*/ 

function*GeneratorFu(){
    yield "Hello";
    yield "Welcome";
    yield "Everyone";
};


var newIdentity  = GeneratorFu();

// console.log(newIdentity.next().value);
// console.log(newIdentity.next().value);
// console.log(newIdentity.next().value);
// console.log(newIdentity.next().value);


console.log(newIdentity.next());
console.log(newIdentity.next());
console.log(newIdentity.next());
console.log(newIdentity.next());
