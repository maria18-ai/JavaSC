// variaveis e seleções de elementos
const apiKey = 'c123abf760259217f9620a7fd62db0d2';
const apiCountryURL = "https://flagsapi.com//shiny/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weathericonElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");


// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);

    return data;
}


const showWatherData = async (city) => {
    const data = await getWeatherData(city);

    if (data) {
        cityElement.textContent = data.name;
        tempElement.textContent = data.main.temp + "C";
        descElement.textContent = data.weather[0].description;
        weathericonElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        countryElement.textContent = data.sys.country;
        umidityElement.textContent = data.main.humidity + "%";
        windElement.textContent = data.wind.speed + "km/h";
    }
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
})
