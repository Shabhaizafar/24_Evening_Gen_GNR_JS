document.querySelector('button').onclick = function (){
    fetch("https://restcountries.com/v3.1/name/India").then((data)=>{
        data.json().then((d2)=>{
            console.log(d2);
        });
    }); 
};