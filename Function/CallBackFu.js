// Callback Function : 

function second(){
    console.log("Another One!!");
}

// second();

// function Main(newFu){
//     console.log("Main Function !!");
//     // second();

//     newFu(); // callback
// }

// Main(second);



function Main(callback){
    console.log("Main Function !!");
    // second();

    callback(); // callback
}

Main(second);