const apiKey = "b0df74578cd213ff80027effb80c7d12";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector('.weather-icn');

async function checkWeather(city){
const res = await fetch(apiUrl +city + `&appid=${apiKey}`);
if(res.status === 404){
    document.querySelector('.error').style.display = 'block'
    document.querySelector('.weather').style.display = 'none'
}
else{
  
    
    let data = await res.json();
console.log(data);
document.querySelector('.city').innerHTML = data.name
document.querySelector('.temp').innerHTML =Math.round(data.main.temp ) +" °c"
document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


document.querySelector('.weather').style.display = 'block'
document.querySelector('.error').style.display = 'none'

if(data.weather[0].main === 'Clouds'){
    weatherImg.src = 'images/clouds.png';
}
else if(data.weather[0].main === 'Clear'){
weatherImg.src = 'images/clear.png';
}
else if(data.weather[0].main === 'Rain'){
weatherImg.src = 'images/rain.png';
}
else if(data.weather[0].main === 'Drizzle'){
weatherImg.src = 'images/drizzle.png';
}
else if(data.weather[0].main === 'Mist'){
    weatherImg.src = 'images/mist.png';
}
}


}




searchBtn.addEventListener('click' ,()=>{
    checkWeather(searchBox.value);
})
