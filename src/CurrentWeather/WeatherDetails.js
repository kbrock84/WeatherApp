import React from "react";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  flex-direction: column;
  color: #dedede;
  font-size: 16px;
  margin: 0;
  width: auto;

  div.sub-items:not(:last-child),
  div.main-item:not(:last-child) {
    border-bottom: 1px solid #647084;
  }

  div.sub-items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    background-color: #282c34;
  }

  div.main-item {
    text-transform: uppercase;
    justify-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #373d48;
    text-align: center;
    font-weight: 700;
    width: 100%;
  }

  div.sub-items > div {
    text-transform: capitalize;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
    text-align: left;
    border-left: 1px solid #647084;
    height: 100%;
  }

  p {
    margin: 16px;
  }
`;

const WeatherDetails = ({ weather }) => {
  return (
    <DetailsWrapper>
      {Object.keys(weather).map((key, i) => {
        return key !== "weather" && typeof weather[key] === "object" ? (
          <div key={"main-item-" + i + key}>
            <div className="main-item">
              <h3>{key}</h3>
            </div>
            <div className="item sub-items" data-testid={key + "-container"}>
              {Object.keys(weather[key]).map(subKey => {
                return (
                  <div key={"main-item-container-" + i + key + subKey}>
                    <p>{` ${subKey}: ${weather[key][subKey]}`}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null;
      })}
    </DetailsWrapper>
  );
};

export default WeatherDetails;
