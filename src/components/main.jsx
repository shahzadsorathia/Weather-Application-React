import React, { Component, useState } from 'react';


const[query, SetQuery] = useState('');
const[weather, setWeather] = useState({});

const search = evt => {
    if (evt.key === "Enter") {
        fetch(`${api.base} weather?q=${query}&units=metrics&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
            })
    }
}
const dateBuilder = (d) => {

}
class Main extends Component {
    render() {

        return (
            <div className="search-box">

                <div>
                    
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    < div >
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}
                            </div>
                            <div className="date"> {dateBuilder(new Date())} </div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {math.round(weather.main.temp)} C
                            </div>

                            <div className="weather">{weather.weater[0].main} </div>

                        </div>
                    </div>
                ) : (' ')
                }

            </div>
        );
    }
}

export default Main;