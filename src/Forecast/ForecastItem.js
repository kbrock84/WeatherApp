import React from "react";
import styled from "styled-components";
import { minTemp, maxTemp, avgHumidity } from "./forecast-helper";
import { kelvinTo } from "../TempHelper/temp-helper";

const DayWrapper = styled.div`
  background-color: #828d9f;
  overflow: hidden;
  padding-top: 32px;
  font-weight: 600;

  div.day-icons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  div.day-icons-container > div {
    margin: 0 8px 0 8px;
  }

  span.date-container {
    margin-right: 16px;
  }

  @media (max-width: 560px) {
    div.day-icons-container > div {
      margin: 0;
    }
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const ForecastItem = ({ forecast, units }) => {
  const low = kelvinTo(minTemp(forecast.list), units);
  const high = kelvinTo(maxTemp(forecast.list), units);
  const humidity = avgHumidity(forecast.list);

  const parseHour = h => {
    if (h > 12) {
      return h - 12 + "PM";
    } else if (h === 12) {
      return h + "PM";
    } else if (h === 0) {
      return 12 + "AM";
    } else {
      return h + "AM";
    }
  };

  const day = new Date(forecast.list[0].dt_txt);

  return (
    <DayWrapper>
      <div>
        <span className={"date-container"}>
          {day.getMonth() + 1 + "/" + day.getDate() + "/" + day.getFullYear()}
        </span>
        <span data-testid="max-temp-container">{high + " \xBA " + units}</span>
        {" - "}
        <span data-testid="min-temp-container">{low + " \xBA " + units}</span>
      </div>
      <div className={"day-icons-container"}>
        {forecast.list.map(f => {
          return (
            <div key={"forecast-item-" + f.dt_txt}>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  f.weather[0].icon +
                  ".png"
                }
                alt={f.dt_txt + " " + f.weather[0].description}
              />
              <p>{kelvinTo(f.main.temp, units) + " \xBA "}</p>
              <p>{parseHour(new Date(f.dt_txt).getHours())}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>
          Humidity:{" "}
          <span data-testid="average-humidity-container">{humidity}</span>%
        </p>
      </div>
    </DayWrapper>
  );
};

export default ForecastItem;
