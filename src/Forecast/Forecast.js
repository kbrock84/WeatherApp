import React from "react";
import ForecastItem from "./ForecastItem";

const Forecast = ({ forecast, units }) => {
  const dayLists = [];
  if (forecast.list) {
    for (let i = 0; i < 40; i += 9) {
      dayLists.push(forecast.list.slice(i, i + 8));
    }
  }

  return forecast.list ? (
    <div>
      <h2>{forecast.city.name} 5 Day Forcast</h2>
      {dayLists.map((list, i) => {
        return (
          <div key={"forecast-day-" + i} data-testid="forecast-day">
            <ForecastItem
              forecast={{ ...forecast, list: list }}
              units={units}
            />
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Forecast;
