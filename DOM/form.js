var btn = document.querySelector('.login-btn');

// Method : 1

// btn.onclick = function (){
//     var table_row = document.createElement('tr');
//     var table_col1 = document.createElement('td');
//     var table_col2 = document.createElement('td');

//     table_col1.append(document.querySelector('#username').value);
//     table_col2.append(document.querySelector('#password').value);
//     table_row.appendChild(table_col1);
//     table_row.appendChild(table_col2);

//     document.querySelector('table').appendChild(table_row);
// }


`// -----------------------`

btn.onclick = function(){
    var table_row = document.createElement('tr');
    var uname  = document.querySelector('#username').value;
    var pwd = document.querySelector('#password').value;
    for (let i = 1; i <= 2; i++) {
        var table_col = document.createElement('td');
        if(i==1){
            table_col.append(uname);
        }else if(i==2){
            table_col.append(pwd);
        }
        table_row.appendChild(table_col);
    }
    document.querySelector('table').appendChild(table_row);
}