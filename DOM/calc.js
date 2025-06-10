const calc_body = document.querySelector(".calc-body");
const arr = ['%','+',"-",'/','*'];


calc_body.addEventListener('click',function(event){
    var calc_types = document.querySelector('.calc-typed');
    if(event.target.classList.contains('button')){
        if(event.target.innerText>=0 && event.target.innerText<=9){
            if(calc_types.innerHTML==0){
                calc_types.innerHTML=event.target.innerText;    
                return;
            }
            calc_types.innerHTML+=event.target.innerText;
        }
        else{
            if(arr.includes(event.target.innerText)){
                
             if(arr.includes(calc_types.innerHTML[calc_types.innerHTML.length-1])){
                calc_types.innerHTML = calc_types.innerHTML.slice(0,calc_types.innerHTML.length-1) + event.target.innerText;
            }else{
                calc_types.innerHTML+=event.target.innerText;
            }
        }
        }
    }
});