const express = require("express");
const app = express();
const WeatherRouter = require("./current-weather-router");

const PORT = process.env.PORT || 8080;

app.use("/api/weather/current", new WeatherRouter("weather").getRouter());
app.use("/api/weather/forecast", new WeatherRouter("forecast").getRouter());

app.listen(PORT, () => console.log(`Weather server listening on ${PORT}`));

module.exports = app;
