// function : Block Code.

// 1. Inbuilt Function.
// 2. User Defined Function.

/*
    1. Name Function 
        - without arg and without return type
        - with arg and without return type
        - without arg and with return type
        - with arg and with return type

    2. Function Expression 
        - without arg and without return type
        - with arg and without return type
        - without arg and with return type
        - with arg and with return type

    3. Arrow Function 
        - without arg and without return type
        - with arg and without return type
        - without arg and with return type
        - with arg and with return type

    4. IIFE Function 
    5. Generator Function 
    6. Anonymous Function 
    7. Higher Order Function
    8. recursion Function 
    9. Getter-Setter Function
    10. Callback Function 
*/



// 1. Name Function  
//         - without arg and without return type

// function  Declaration + initialization
function factionname(){
    console.log("without arg and without return type");
}

// factionname(); // Function Calling/Invoked


//         - with arg and without return type
function factionname(v1,v2){                   // v1,v2    paremeters
    console.log("with arg and without return type",v1+v2);
}

// factionname(12,13,14); // Function Calling/Invoked     // 12,13,14 Arguments


//         - without arg and with return type
function factionname(){
    return 12>13;//false        //return statement
}

// var ans = factionname();    //with storing 
// console.log(ans);
// console.log(factionname()); // without


//         - with arg and with return type

function result(m){
    if (m>35) {
        return "Pass !!";
    }else{
        return "Fail !!";
    }
}

// console.log(result(5));