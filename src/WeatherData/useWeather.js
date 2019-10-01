import { useEffect } from "react";
const baseUrl = "api/weather/";

const useWeather = (setResult, weatherType, queryType, location) => {
  useEffect(() => {
    fetch(getQuery(weatherType, queryType, location), { method: "post" })
      .then(response =>
        response.status === 200
          ? response.json()
          : Promise.resolve({
              error: response.statusText,
              code: response.status
            })
      )
      .then(data => {
        if (data === "Not Found") {
          setResult(prevState => ({
            ...prevState,
            error: { message: data, status: 404 }
          }));
        } else {
          setResult(prevState => {
            if (data.error) {
              return {
                ...prevState,
                error: { error: data.error, status: data.status || 404 }
              };
            } else {
              return data;
            }
          });
        }
      })
      .catch(err => setResult(prevState => ({ ...prevState, ...err })));
  }, [location, weatherType]);
};

const getQuery = (weatherType, queryType, location) => {
  switch (queryType) {
    case "zip":
      return `${baseUrl}${weatherType}/zip/${location.zip}`;
    case "city":
      return `${baseUrl}${weatherType}/cities/${location.city}${
        location.country ? "," + location.country : ""
      }`;
    case "id":
      return `${baseUrl}${weatherType}/id/${location.id}`;
    case "lat-lon":
      return `${baseUrl}${weatherType}/lat=${location.lat}&lon=${location.lon}`;
    default:
      const invalidQueryType = JSON.stringify(queryType);
      throw new TypeError(
        `Invalid Arguments: ${invalidQueryType} is not a valid query type`
      );
  }
};

export default useWeather;
