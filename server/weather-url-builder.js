const buildWeatherUrl = (config, apiName, query) => {
  return `${config.api}${apiName}?${query}&appid=${config.key}`;
};

module.exports = buildWeatherUrl;
