const parent = document.querySelector('main');

parent.addEventListener('click',function(event){
    console.log(`${event.target.innerHTML} Triggered !!!`);
});