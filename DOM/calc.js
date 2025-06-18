const calc_body = document.querySelector(".calc-body");
const arr = ['%', '+', "-", '/', '*'];

function operation(op, n1, n2) {
    switch (op) {
        case '+': return +n1 + (+n2);
        case '-': return +n1 - (+n2);
        case '/': return +n1 / (+n2);
        case '*': return +n1 * (+n2);
    }
}

calc_body.addEventListener('click', function (event) {
    var calc_types = document.querySelector('.calc-typed');
    if (event.target.classList.contains('button')) {
        if (event.target.innerText >= 0 && event.target.innerText <= 9) {
            if (calc_types.innerHTML == 0) {
                calc_types.innerHTML = event.target.innerText;
                return;
            }
            calc_types.innerHTML += event.target.innerText;
        }
        else {
            if (event.target.innerHTML == "=") {
                // -------------
                if (arr.includes(calc_types.innerHTML[calc_types.innerHTML.length - 1])) {
                    return;
                }
                var str = calc_types.innerHTML;
                op = "+";
                var n1 = "0";
                var n2 = "";
                var j = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str.length - 1 == i) {
                        n2 = str.slice(j, i + 1);
                        n1 = operation(op, n1, n2);
                    }
                    if (arr.includes(str[i])) {

                        n2 = str.slice(j, i);

                        j = i + 1;
                        n1 = operation(op, n1, n2);
                        op = str[i];
                    }
                }
                document.querySelector('.calc-operation').innerHTML = str + "=";
                calc_types.innerHTML = n1;

                // -------------
            } else if (event.target.innerHTML == "C") {
                calc_types.innerHTML = "0";
                document.querySelector('.calc-operation').innerHTML = "";
            }
            else if (arr.includes(event.target.innerText)) {

                if (arr.includes(calc_types.innerHTML[calc_types.innerHTML.length - 1])) {
                    calc_types.innerHTML = calc_types.innerHTML.slice(0, calc_types.innerHTML.length - 1) + event.target.innerText;
                } else {
                    calc_types.innerHTML += event.target.innerText;
                }
            }else if(event.target.innerHTML == "⌫"){
                if(calc_types.innerHTML.length==1){
                    calc_types.innerHTML = "0";
                    return;
                }
                calc_types.innerHTML = calc_types.innerHTML.slice(0,calc_types.innerHTML.length-1);
            }
        }
    }
});