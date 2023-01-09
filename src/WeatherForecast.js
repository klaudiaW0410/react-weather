import React, { useState }  from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function displayTemperature(response) {
        setForecast(response.data)
        setLoaded(true);
      }
      
   if (loaded){
    console.log(forecast);
        return(
     <div className ="WeatherForecast">
        <div className="row">
            <div className="col">
                < div className="WeatherForecast-day">Tou</div>
                <WeatherIcon code="clear-sky-day" size={32} />
                < div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">{forecast.temperature.maximum}°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
    </div>
    );

    } else {
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apyKey = "bd44c7c3b23184830acea00o17tff244";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apyKey}&units=metric`;
    
      axios.get(apiUrl).then(displayTemperature); 
    return null;
    }
}