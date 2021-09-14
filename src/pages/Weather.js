import React, { useState } from 'react';

// declaring api 
const api = {
  key: "41ddfe91262cecacb482dec769b75d99",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

  // declaring varibale and usestate
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  //  Api fetch function 
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  // Displaying date function 
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = [d.getDate()];
    let month = months[d.getMonth()];
    let year = [d.getFullYear()];
    return `${day} ${date} ${month} ${year}`
  }

  return (

    <div className="Weather">
      <h2 className="title"> Weather Forecast </h2>

      {/* Search box to input city name */}
      <div className="searchbox">
        <input
          type="text"
          className="search"
          placeholder="Search....."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      {(typeof weather.main != "undefined") ? (

        <div>
          {/* City Name display */}
          <div className="locationbox">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          {/* displaying the weather output */}
          <div className="weatherbox">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ('')}
      

    </div>

  );
}

export default Weather;
