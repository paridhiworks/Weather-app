
const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherInfo = document.getElementById("weather-info")

const API_KEY = "94c3fe9fec1dda446017a5ad3366b85b";

button.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = input.value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}
    &appid=${API_KEY}`; 

    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        const temp = Math.round(data.main.temp - 273.15);
        weatherInfo.innerHTML=`The temperature in ${cityName} is ${temp}° C`;
    });
    input.value="";
});



