import React from "react";
import styled from "styled-components";
import TempHelper from "../TempHelper/temp-helper";

const CurrentWeatherWrapper = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  margin-bottom: 4em;

  h2,
  p {
    margin: 0;
  }

  div.weather-display-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 82px;
    height: 82px;
  }

  p.temperature {
    font-size: 2em;
    padding-bottom: 10px;
  }
`;

const CurrentWeather = ({ weather, units }) => {
  const temp = TempHelper.kelvinTo(weather.main.temp, units);
  return (
    <CurrentWeatherWrapper>
      <div>
        <h2>{weather.name}</h2>
        <div className="weather-display-wrapper">
          <img
            alt={weather.weather[0].description}
            src={
              "http://openweathermap.org/img/w/" +
              weather.weather[0].icon +
              ".png"
            }
          />
          <p className={"temperature"}>
            <span data-testid="current-temp">{temp}</span> {"	\xBA " + units}
          </p>
        </div>
        <p data-testid="current-weather">{weather.weather[0].description}</p>
      </div>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
