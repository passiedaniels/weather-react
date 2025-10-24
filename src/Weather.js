import React from "react";
import axios from "axios";
import App from "./App";

export default function Weather(props) {
  let weatherData = {
    city: "Nairobi",
    Date: "Tue 20:33",
    Humidity: "81",
    Description: "few clouds",
    Wind: "7.2",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
  };

  return (
    <div className="container">
      <header>
        <form className="form" id="form-type">
          <input
            id="searchbox"
            className="searchbox"
            type="search"
            placeholder="Enter city"
            required
          />
          <input className="submitbox" type="submit" value="search" />
        </form>
      </header>
      <main>
        <h1>
          <div className="city-info">
            <div className="city" id="city">
              {weatherData.city}
            </div>
            <div className="Weather">
              <div id="icon">
                <img src={weatherData.imgUrl} className="emoji" />
              </div>

              <div className="temp" id="temp">
                <span className="digit">20</span>
                <span className="degree">&deg;</span>
                <span className="unit">C</span>
              </div>
            </div>
          </div>
        </h1>

        <div>
          <span> {weatherData.Date} pm</span>,{" "}
          <span id="description">{weatherData.Description} </span>
        </div>
        <div>
          humidity{" "}
          <span className="humidity" id="humidity">
            {weatherData.Humidity}%
          </span>
          , wind
          <span className="wind" id="wind">
            {weatherData.Wind}km/h
          </span>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/passiedaniels">Pascalia A.</a>, open
          sourced
          <a href="https://github.com/passiedaniels/my-forecast">Github</a> and
          hosted on
          <a href="https://passie-forecast.netlify.app/">Netlify</a>
        </p>
      </footer>
    </div>
  );
}
