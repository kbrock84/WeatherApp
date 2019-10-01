const fs = require("fs");
const path = require("path");

const getConfig = () =>
  JSON.parse(
    fs.readFileSync(path.resolve("./server/api-config/weather-api.json"))
  );

module.exports = getConfig;
