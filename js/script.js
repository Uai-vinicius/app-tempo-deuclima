//variaveis e elementos
const apikey = "500ad33ad811ed9334a0df5e6a79af33";
const apicountryURL = "https://countryflagsapi.com/png/";

const cityinput = document.querySelector('#city-input');
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector('#city')
const tmpElement = document.querySelector('#temperatura span')
const descElement = document.querySelector('#description')
const weatherElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const unidityElement = document.querySelector('#unidity')
const windElement = document.querySelector('#wind span')


//funçoes
const getWeatherData = async(city) => {

    const apiWheaterURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br" ;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}
const showWheatherData = async (city) => {
    const data = await getWeatherData (city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.wheater [0].description;

};
//eventos
searchBtn.addEventListener ("click", (e) => {
    e.preventDefault();

    const  city = cityinput.value;

    console.log("city");
});
