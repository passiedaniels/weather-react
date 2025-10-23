import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(
      `The temperature in ${response.data.city} is ${Math.round(
        response.data.temperature.current
      )}°C`
    );
    console.log(response.data);
  }
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=943a3ddbo20b374aff624c0t29d891a1`;
  axios.get(url).then(displayTemperature);

  return (
    <div>
      <h1>What is the temperature in {props.city}?</h1>
    </div>
  );
}
