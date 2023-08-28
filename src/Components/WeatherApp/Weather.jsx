import React, { useState } from 'react'
import './Weather.css'
import search from '../Assets/search.jpg'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud (2).png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'

const Weather = () => {

  let api_key = "8fb5f22d4db807dcb1e1c33b9eae8865";

let [wicon,setWicon]=useState(cloud);
  const result = async () => {
    const element = document.getElementsByClassName("srcinput")
    if(element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let res = await fetch(url);
    let data = await res.json();

    const humidity = document.getElementsByClassName('humidity-per text');
    const wind = document.getElementsByClassName('windSpeed');
    const temprature = document.getElementsByClassName('weather-tem');
    const location = document.getElementsByClassName('weather-loc');

    humidity[0].innerHTML = Math.floor(data.main.humidity)+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" Km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp)+" °C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==='01d' ||data.weather[0].icon==='01n'){
      setWicon(clear);
    }
    else if(data.weather[0].icon==='02d' ||data.weather[0].icon==='02n'){
      setWicon(cloud);
    }
    else if(data.weather[0].icon==='03d' ||data.weather[0].icon==='03n'){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==='04d' ||data.weather[0].icon==='04n'){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==='09d' ||data.weather[0].icon==='09n'){
      setWicon(rain);
    }
    else if(data.weather[0].icon==='10d' ||data.weather[0].icon==='10n'){
      setWicon(rain);
    }
    else if(data.weather[0].icon==='13d' ||data.weather[0].icon==='13n'){
      setWicon(snow);
    }
    else{
      setWicon(clear);
    }
  }
  return (
    <div className='container'>
      <div className='sub-container'>
        <input type="text" className='srcinput' placeholder='Enter Location here...' />
        <div className="search-icon" onClick={() => { result() }}>
          <img src={search} alt="img is loading" className='srcimg' />
        </div>
      </div>

      <div className="weather-img">
        <img src={wicon} alt="img is loading" className='wea-img' />
      </div>
      <div className="weather-tem">24°C</div>
      <div className="weather-loc city-name">Mumbai</div>

      <div className="other-info">
        <div className="element">
          <img src={humidity} alt="" className='icons' />
          <div className="info">
            <div className="humidity-per text">60%</div>
            <div className="text1">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind} alt="" className='icons' />
          <div className="info">
            <div className="windSpeed text">20Km/h</div>
            <div className="text1">Wind Speed</div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Weather
