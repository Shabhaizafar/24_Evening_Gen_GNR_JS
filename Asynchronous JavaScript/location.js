document.querySelector("button").addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition(function(data){
        console.log(data.coords.latitude);
        console.log(data.coords.longitude);
    },function(){
        console.log("Reject");
    });
});


