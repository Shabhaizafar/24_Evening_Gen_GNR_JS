const calc_body = document.querySelector(".calc-body");
const arr = ['%','+',"-",'/','*'];


calc_body.addEventListener('click',function(event){
    var calc_types = document.querySelector('.calc-typed');
    if(event.target.classList.contains('button')){
        if(event.target.innerHTML == "="){
            var ans = "";
            var n2 = "";
            var flag = true;
            var counter = 0;
            var op = "";
            for (let i = 0; i < calc_types.innerHTML.length; i++) {
                if(arr.includes(calc_types.innerHTML[i])){
                    flag = false;
                    counter++;
                    op = calc_types.innerHTML[i];
                   
                    continue;
                }
                if(flag){
                    ans+=calc_types.innerHTML[i];
                }
                else{
                    n2+=calc_types.innerHTML[i];
                }
   
            }
            switch (op) {
                case '+': console.log(+ans+(+n2));
                    break;
            }
            return;
        }

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