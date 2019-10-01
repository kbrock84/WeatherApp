import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";
import { maxTemp, minTemp, avgHumidity } from "./forecast-helper";
import { kelvinTo } from "../TempHelper/temp-helper";

const mockForecast = {
  cod: "200",
  message: 0.0119,
  cnt: 40,
  list: [
    {
      dt: 1569888000,
      main: {
        temp: 286.78,
        temp_min: 286.78,
        temp_max: 286.958,
        pressure: 1018.83,
        sea_level: 1018.83,
        grnd_level: 1010.92,
        humidity: 40,
        temp_kf: -0.18
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.69,
        deg: 9.067
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-10-01 00:00:00"
    },
    {
      dt: 1569898800,
      main: {
        temp: 280.77,
        temp_min: 280.77,
        temp_max: 280.9,
        pressure: 1020.22,
        sea_level: 1020.22,
        grnd_level: 1011.44,
        humidity: 63,
        temp_kf: -0.13
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.8,
        deg: 0.921
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-10-01 03:00:00"
    },
    {
      dt: 1569909600,
      main: {
        temp: 279.47,
        temp_min: 279.47,
        temp_max: 279.557,
        pressure: 1021.56,
        sea_level: 1021.56,
        grnd_level: 1012.83,
        humidity: 72,
        temp_kf: -0.09
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.5,
        deg: 359.312
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-10-01 06:00:00"
    },
    {
      dt: 1569920400,
      main: {
        temp: 278.16,
        temp_min: 278.16,
        temp_max: 278.2,
        pressure: 1021.8,
        sea_level: 1021.8,
        grnd_level: 1013.37,
        humidity: 79,
        temp_kf: -0.04
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.48,
        deg: 19.952
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-10-01 09:00:00"
    },
    {
      dt: 1569931200,
      main: {
        temp: 276.945,
        temp_min: 276.945,
        temp_max: 276.945,
        pressure: 1021.85,
        sea_level: 1021.85,
        grnd_level: 1013.59,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.48,
        deg: 216.918
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-10-01 12:00:00"
    },
    {
      dt: 1569942000,
      main: {
        temp: 277.9,
        temp_min: 277.9,
        temp_max: 277.9,
        pressure: 1022.5,
        sea_level: 1022.5,
        grnd_level: 1014.49,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.83,
        deg: 185.101
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-10-01 15:00:00"
    },
    {
      dt: 1569952800,
      main: {
        temp: 286.5,
        temp_min: 286.5,
        temp_max: 286.5,
        pressure: 1021.65,
        sea_level: 1021.65,
        grnd_level: 1014.38,
        humidity: 47,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.87,
        deg: 181.116
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-10-01 18:00:00"
    },
    {
      dt: 1569963600,
      main: {
        temp: 291.203,
        temp_min: 291.203,
        temp_max: 291.203,
        pressure: 1019.95,
        sea_level: 1019.95,
        grnd_level: 1012.74,
        humidity: 35,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.05,
        deg: 199.44
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-10-01 21:00:00"
    }
  ],
  city: {
    id: 5809844,
    name: "Seattle",
    coord: {
      lat: 47.6038,
      lon: -122.3301
    },
    country: "US",
    population: 608660,
    timezone: -25200,
    sunrise: 1569852401,
    sunset: 1569894710
  }
};

function setup(tempUnits = "F") {
  return render(<ForecastItem forecast={mockForecast} units={tempUnits} />);
}

describe("<ForecastItem />", () => {
  const highTemp = maxTemp(mockForecast.list);
  const lowTemp = minTemp(mockForecast.list);

  it("should display the max temperature for the day in F when specified", () => {
    const { getByTestId } = setup("F");
    const tempContainer = getByTestId("max-temp-container");

    expect(tempContainer.innerHTML).toContain(kelvinTo(highTemp, "F"));
  });

  it("should display the min temperature for the day in F when specified", () => {
    const { getByTestId } = setup("F");
    const tempContainer = getByTestId("min-temp-container");

    expect(tempContainer.innerHTML).toContain(kelvinTo(lowTemp, "F"));
  });

  it("should display the max temperature for the day in C when specified", () => {
    const { getByTestId } = setup("C");
    const tempContainer = getByTestId("max-temp-container");

    expect(tempContainer.innerHTML).toContain(kelvinTo(highTemp, "C"));
  });

  it("should display the min temperature for the day in C when specified", () => {
    const { getByTestId } = setup("C");
    const tempContainer = getByTestId("min-temp-container");

    expect(tempContainer.innerHTML).toContain(kelvinTo(lowTemp, "C"));
  });

  it("should display an icon for every 3 hours with alt text containing time and description", () => {
    const { getByAltText } = setup();

    mockForecast.list.forEach(w => {
      const image = getByAltText(
        new RegExp(`.*${w.dt_txt}.*${w.weather[0].description}`)
      );
      let imgUrl = new RegExp(`https?://.*${w.weather[0].icon}\\.png`);

      expect(image).toBeDefined();
      expect(image.getAttribute("src")).toMatch(imgUrl);
    });
  });

  it("should display the average humidity for the day", () => {
    let mockAverage = avgHumidity(mockForecast.list);
    const { getByTestId } = setup();
    const humidityContainer = getByTestId("average-humidity-container");
    expect(humidityContainer.innerHTML).toContain(mockAverage);
  });
});
