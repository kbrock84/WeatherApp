const buildWeatherUrl = require("./weather-url-builder");

const config = { key: "test-key", api: "test-api/" };

describe("weather-url-builder function", () => {
  it("should return the correctly formed url with all arguments present", () => {
    const query = "test-query";
    const apiName = "test-name";
    const correctlyFormedUrl = `${config.api}${apiName}?${query}&appid=${config.key}`;

    expect(buildWeatherUrl(config, apiName, "test-query")).toBe(
      correctlyFormedUrl
    );
  });
});
