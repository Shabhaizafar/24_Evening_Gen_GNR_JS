// https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityInput}



// document.querySelector('button').addEventListener('click',function(){
//     fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=Gandhinagar`).then((data)=>{
//         data.json().then((data2)=>{
//             console.log(data2);
//         });
//     });
// });

// https://shabhaizafar.github.io/Responsive_Weather_App/


fetch("https://api.weatherapi.com/v1/forecast.json?key=445556d3006c9a1aa33e3ea6ff53024d&q=Delhi&days=7")
  .then(res => res.json())
  .then(data => {
    data.forecast.forecastday.forEach(day => {
      console.log(day.date, day.day.avgtemp_c, day.day.condition.text);
    });
  });