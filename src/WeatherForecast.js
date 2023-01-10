import React, { useState }  from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
      }
      
   if (loaded){
        return(
     <div className ="WeatherForecast">
        <div className="row">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        </div>
    );

    } else {
        let lat = props.coordinates.latitude;
        let lon = props.coordinates.longitude;
        let apyKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apyKey}`;
        axios.get(apiUrl).then(handleForecastResponse);
        return null;
      }
}