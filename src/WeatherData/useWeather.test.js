import useWeather from "./useWeather";
import { renderHook } from "@testing-library/react-hooks";

const setResultSpy = jest.fn();
global.fetch = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve({
      ok: true,
      status: 200,
      json: () => {
        return Promise.resolve({ data: "test-data" });
      }
    });
  });
});

afterEach(() => {
  global.fetch.mockClear();
});

describe("useWeather hook", () => {
  it("should call appropriate current end point for zip", () => {
    const city = { zip: 98036 };
    renderHook(() => useWeather(setResultSpy, "current", "zip", city));

    expect(fetch).toBeCalledWith(`api/weather/current/zip/${city.zip}`, {
      method: "post"
    });
  });

  it("should call appropriate current end point for city", () => {
    const city = { city: "Seattle", country: "us" };
    renderHook(() => useWeather(setResultSpy, "current", "city", city));
    expect(fetch).toBeCalledWith(
      `api/weather/current/cities/${city.city},${city.country}`,
      { method: "post" }
    );
  });

  it("should call appropriate current end point for city without country", () => {
    const city = { city: "Seattle" };
    renderHook(() => useWeather(setResultSpy, "current", "city", city));
    expect(fetch).toBeCalledWith(`api/weather/current/cities/${city.city}`, {
      method: "post"
    });
  });

  it("should call appropriate current end point for city id", () => {
    const city = { id: 123456 };
    renderHook(() => useWeather(setResultSpy, "current", "id", city));
    expect(fetch).toBeCalledWith(`api/weather/current/id/${city.id}`, {
      method: "post"
    });
  });

  it("should call appropriate current end point for lat long", () => {
    const location = { lat: 45.2, lon: 100.4 };
    renderHook(() => useWeather(setResultSpy, "current", "lat-lon", location));
    expect(fetch).toBeCalledWith(
      `api/weather/current/lat=${location.lat}&lon=${location.lon}`,
      { method: "post" }
    );
  });

  it("should call appropriate forecast end point for zip", () => {
    const zip = { zip: 98036 };
    renderHook(() => useWeather(setResultSpy, "forecast", "zip", zip));

    expect(fetch).toBeCalledWith(`api/weather/forecast/zip/${zip.zip}`, {
      method: "post"
    });
  });

  it("should call appropriate forecast end point for city", () => {
    const city = { city: "Seattle", country: "us" };
    renderHook(() => useWeather(setResultSpy, "forecast", "city", city));
    expect(fetch).toBeCalledWith(
      `api/weather/forecast/cities/${city.city},${city.country}`,
      { method: "post" }
    );
  });

  it("should call appropriate forecast end point for city without country", () => {
    const city = { city: "Seattle" };
    renderHook(() => useWeather(setResultSpy, "forecast", "city", city));
    expect(fetch).toBeCalledWith(`api/weather/forecast/cities/${city.city}`, {
      method: "post"
    });
  });

  it("should call appropriate forecast end point for city id", () => {
    const city = { id: 123456 };
    renderHook(() => useWeather(setResultSpy, "forecast", "id", city));
    expect(fetch).toBeCalledWith(`api/weather/forecast/id/${city.id}`, {
      method: "post"
    });
  });

  it("should call appropriate forecast end point for lat long", () => {
    const location = { lat: 45.2, lon: 100.4 };
    renderHook(() => useWeather(setResultSpy, "forecast", "lat-lon", location));
    expect(fetch).toBeCalledWith(
      `api/weather/forecast/lat=${location.lat}&lon=${location.lon}`,
      { method: "post" }
    );
  });
});
