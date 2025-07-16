// https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityInput}

var city = "Nadiad";
fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`).then((data)=>{
    console.log(data);
});