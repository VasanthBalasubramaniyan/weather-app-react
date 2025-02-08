import { useState } from "react";
import axios from "axios";

function Weather() {
    const [city,setCity] = useState("")

    const [weather,setWeather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(evt){
        setCity(evt.target.value)
    }
    function getWeather(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=894b21a69342f4843413b8f7572e365a`)

        weatherData.then(function(success){
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }


  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#E2D4FF] p-5 border rounded-md">
          <h1 className="text-3xl font-medium text-center">Weather Report</h1>
          <p>I can give you a weather report to your city!</p>
          <input
            onChange={handleCity}
            type="text"
            placeholder="Enter your City Name"
            className="mt-2 bg-white p-2 border-0 rounded-md outline-0"
          />
          <br />
          <button onClick={getWeather} className="mt-2 text-white bg-black p-3 border-0 rounded-md">
            Get Report
          </button>

          <div className="mt-2">
            <h1>
              <b>Weather: </b>{weather}
            </h1>
            <p>
              <b>Temperature: </b>{temp}
            </p>
            <p>
              <b>Description: </b>{desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
