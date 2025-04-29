function Main(){
    var choice = prompt("1. type 'num' for Number.\n2. type 'str' for String\n\nEnter Your Choice : ");
    switch (choice) {
        case 'num': NumberAll();
            
            break;
        case 'str':
                StringAll();
            break;
        default: console.log("Select Valid Datatype !!");
            break;
    }
}

// Main();



function NumberAll(){
    var n1 = +prompt("Enter the Value of N1 : ");
    var n2 = +prompt("Enter the Value of N2 : ");
    var choice = prompt("1. '+' for Addition "); 
    switch (choice) {
        case '+':
                Add(n1,n2);
            break;
        // -,*,/,%
        default:
            break;
    }
}
function StringAll(){
    console.log("String");
    // user input str1,str2 , choice



    // 1. concation 
    // 2. concatination Uppercase
    // 3. concatination Lowercase
    // 4. concatination CaseSwap
    // 5. default

}

function Add(a,b){  
    console.log("Addtion : ",a+b);
}