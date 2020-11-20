// TODO
// 1) add function to change background
//    depending on temperature
// 2) add ability to change units e.g. Metric or Imperial

//default api tools needed
const api = {
    API_KEY: "7238d61a958aa9f57ef306d3faf1d1d1",
    BASE_URI: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

// enters input to api query
function setQuery(event) {
    if(event.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

// fetches api data based on user input
function getResults(query) {
    fetch(`${api.BASE_URI}weather?q=${query}&units=metric&appid=${api.API_KEY}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

// displays results of existing data
function displayResults(weather) {
    console.log(weather);

    //city & country
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    //current date using dateBuilder()
    let currentDate = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(currentDate);

    //daily temperature
    let temperature = document.querySelector('.current-forcast .temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    //current weather
    let currentWeather = document.querySelector('.current-forcast .current-weather');
    currentWeather.innerHTML = `${weather.weather[0].main}`;

    //daily high and low temperature
    let hiLowTemp = document.querySelector('.current-forcast .hi-low');
    hiLowTemp.innerHTML = `${Math.round(weather.main.temp_max)}°c / 
                           ${Math.round(weather.main.temp_min)}°c`;
}

//builds the current date 
function dateBuilder(currentDate){
    let months = ["January", "February", "March", "April",
                  "May", "June", "July", "August", "September",
                  "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday"];
    
    let day = days[currentDate.getDay()];
    let date = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
