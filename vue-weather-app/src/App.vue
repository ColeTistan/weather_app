<template>
  <div id="app" :class="typeof weather.main != 'undefined' && 
                        weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <div class="header">
        <input 
          type="text"
          class="search"
          placeholder="search for a place..."
          v-model="query"
          @keypress="getWeather"
          />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="city">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="current-forcast">
          <div class="temperature">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="current-weather">{{ weather.weather[0].main }}</div> 
          <div class="hi-low">{{ Math.round(weather.main.temp_max) }}°c / {{ Math.round(weather.main.temp_min) }}°c</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        API_KEY: "7238d61a958aa9f57ef306d3faf1d1d1",
        BASE_URI: "https://api.openweathermap.org/data/2.5/",
        query: '',
        weather: { }
      }
    },
    methods: {
      getWeather(e) {
        if(e.key == "Enter") {
          fetch(`${this.BASE_URI}weather?q=${this.query}&units=metric&appid=${this.API_KEY}`)
          .then(weather => {
            return weather.json();
          }).then(this.setResults);
        }
      },
      setResults(results) {
        this.weather = results;
      },
      dateBuilder(){
        let d = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday"];
        let months = ["January", "February", "March", "April",
                      "May", "June", "July", "August", "September",
                      "October", "November", "December"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Helvetica', sans-serif;
  }

  #app{
    background-image: url('./assets/cold-bg.jpg');
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }
  
  #app.warm{
    background-image: url('./assets/warm-bg.jpg');
  }

  main{
    min-height: 100vh;
    padding: 25px;

    background-image: linear-gradient(to top,
                                    rgba(0,0,0,0.25),
                                    rgba(0,0,0,0.75));
  }

  .header .search{
    display: block;
    width: 100%;
    padding: 15px;
    transition: 0.3s ease-out;
  
    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    background-color: rgba(255,255,225,0.5);
    border-radius: 16px 0px 16px 0px;
  }

  .header .search:focus{
    box-shadow: 0px 0px 1px rgba(0,0,0,0.25);
    background-color: rgba(255,255,225,0.9);
    border-radius: 0px 16px 0px 16px;
  }

  .weather-wrap{
    color: #efefef;
    margin: 25px 25px;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
  }

  .location-box .city{
    color: #efefef;
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
  }

  .location-box .date{
    color: #fff;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
  }

  .current-forcast .temperature{
    display: inline-block;
    background-color: rgba(255,255,225,0.25);
    color: #efefef;
    font-size: 100px;
    font-weight: 700;
    padding: 10px 20px;
    margin: 10px 30px;
    border-radius: 16px;
    text-shadow: 3px 6px rgba(0,0,0,0.50);
    box-shadow: 3px 6px rgba(0,0,0,0.50);
  }

  .current-forcast .current-weather{
    color: #efefef;
    font-size: 35px;
    font-weight: 700;
    font-style: italic;
    padding: 10px 20px;
    text-shadow: 5px 2px 4px rgba(0,0,0,0.50);
  }

  .current-forcast .hi-low{
    color: #efefef;
    font-size: 20px;
    font-weight: 500;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.50);
  }

@media only screen and (max-width: 600px){
    main{
      flex: 1 1 100%;
      padding: 0px 5px;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .search{
      margin-top: 25px;
      margin-right: -75px;
    }
  }

</style>
