const express = require("express");
const getConfig = require("./get-config");
const buildWeatherUrl = require("./weather-url-builder");
const apiConfig = getConfig();
const fetch = require("node-fetch");

class WeatherRouter {
  constructor(api) {
    this.api = api;
    this.getRouter = () => {
      const weatherRouter = express.Router();

      weatherRouter.post("/cities/:city,:country", (req, res) => {
        handleRequest(res, `q=${req.params.city},${req.params.country}`);
      });

      weatherRouter.post("/cities/:city", (req, res) => {
        handleRequest(res, `q=${req.params.city}`);
      });

      weatherRouter.post("/id/:id", (req, res) => {
        handleRequest(res, `id=${req.params.id}}`);
      });

      weatherRouter.post("/zip/:zip", (req, res) => {
        handleRequest(res, `zip=${req.params.zip}`);
      });

      weatherRouter.post("/lat=:lat&lon=:lon", (req, res) => {
        handleRequest(
          res,
          `lat=${parseFloat(req.params.lat)}&lon=${parseFloat(req.params.lon)}`
        );
      });
      return weatherRouter;
    };

    const handleRequest = (res, url) => {
      request(url)
        .then(data => {
          if (res.statusCode === 200) {
            res.json(data);
          } else {
            res.status(400);
          }
        })
        .catch(error => res.status(500).send(error));
    };

    const request = query => {
      const url = buildWeatherUrl(apiConfig, this.api, query);
      console.log(url);
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              return response.statusText;
            }
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => reject(error));
      });
    };
  }
}

module.exports = WeatherRouter;
