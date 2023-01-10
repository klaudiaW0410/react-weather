import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){

    return(
    <div className="Weatherinfo">
    <h1> {props.data.city}</h1>
    <ul>
        <li> <FormattedDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
     <div className="d-flex">
        <WeatherIcon code={props.data.icon} size={64} />
        <WeatherTemperature celsius={props.data.temperature} />
        </div>
        </div>
        <div className="col-6">
        <ul>
        <li><strong>Humidity:</strong> {props.data.humidity} %</li>
        <li><strong>Wind:</strong> {Math.round(props.data.wind)} km/h%</li>
    </ul>
        </div>
    </div>
    </div>
    );
}