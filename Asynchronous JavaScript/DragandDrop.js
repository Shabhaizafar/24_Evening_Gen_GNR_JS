function onDragstarter(event){
    console.log(event.dataTransfer.setData("text",event.target.id)); 
}   
function onDragend(event){
    event.preventDefault();
}
function onDropdata(event){
    event.preventDefault();
    var mydata = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(mydata));
}