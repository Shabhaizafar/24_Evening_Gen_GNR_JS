const btn = document.querySelector('#add-btn');
const ul = document.querySelector('ul');
const allbtn = document.querySelector('.buttons');

btn.onclick = function(){
    var todotxt = document.querySelector('#task-input').value;

    var myli = document.createElement('li');
    myli.innerHTML = `<span>${todotxt}</span>
                <div class="buttons">
                    <button title="Done"><span class="material-icons">check_circle</span></button>
                    <button title="Delete"><span class="material-icons">delete</span></button>
                    <button title="Check"><span class="material-symbols-outlined">edit</span></button>
                </div>`;
    ul.appendChild(myli);
    

    document.querySelector('#task-input').value = "";
}


ul.onclick = function (event){
   if(event.target.innerHTML == "check_circle"){
    event.target.parentElement.parentElement.parentElement.children[0].classList.add('doneTask');
   }else if(event.target.innerHTML == "delete"){
    event.target.parentElement.parentElement.parentElement.remove();
   }else if(event.target.innerHTML == "edit" && !event.target.parentElement.parentElement.parentElement.children[0].classList.contains('doneTask')){
    event.target.parentElement.parentElement.parentElement.children[0].innerHTML = prompt("Enter New Value : ");
   }
}
//  
