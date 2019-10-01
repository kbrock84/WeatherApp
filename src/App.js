import React, { useState } from "react";
import "./App.css";
import useWeather from "./WeatherData/useWeather";
import LocationSearch from "./LocationSearch/LocationSearch";
import Geolocation from "./GeoLocation/Geolocation";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import WeatherDetails from "./CurrentWeather/WeatherDetails";
import Nav from "./Nav/Nav";
import Forecast from "./Forecast/Forecast";

function App() {
  const [apiResult, setResult] = useState({});
  const [weatherQuery, setWeatherQuery] = useState({
    weatherType: "current",
    queryBy: "city",
    location: { city: "Seattle", country: "us" },
    tempUnits: "F"
  });

  useWeather(
    setResult,
    weatherQuery.weatherType,
    weatherQuery.queryBy,
    weatherQuery.location
  );

  const search = location => {
    setWeatherQuery(prevState => ({
      ...prevState,
      queryBy: "city",
      location: { city: location }
    }));
  };

  const updateLocation = loc => {
    if (loc && loc.coords) {
      setWeatherQuery(prevState => ({
        ...prevState,
        queryBy: "lat-lon",
        location: {
          lat: loc.coords.latitude,
          lon: loc.coords.longitude
        }
      }));
    }
  };

  const handleNavigation = weatherType =>
    setWeatherQuery(prevState => ({ ...prevState, weatherType: weatherType }));

  const renderWeather = () => {
    if (apiResult.weather) {
      return (
        <>
          <CurrentWeather weather={apiResult} units={weatherQuery.tempUnits} />
          <h3>Details</h3>
          <WeatherDetails weather={apiResult} />
        </>
      );
    } else if (apiResult.list) {
      return (
        <>
          <Forecast
            forecast={apiResult}
            units={apiResult.list ? weatherQuery.tempUnits : "X"}
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={"search-container"}>
          <LocationSearch placeholder={"City"} searchLocation={search}>
            City
          </LocationSearch>
          <Geolocation updateLocation={updateLocation}>
            Use my location
          </Geolocation>
        </div>
        <Nav items={["current", "forecast"]} setItem={handleNavigation} />
      </header>
      {renderWeather()}
    </div>
  );
}

export default App;
