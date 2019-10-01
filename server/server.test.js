const request = require("supertest");
let app = require("./server");

let response = JSON.stringify({ data: "123" });

afterEach(() => {
  global.fetch.mockReset();
});

describe("server endpoints", () => {
  it("should return 200 with correctly formed city query", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post(
      "/api/weather/current/cities/Seattle,us"
    );
    await expect(res.statusCode).toEqual(200);
  });

  it("should return 200 with correctly formed city query", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post("/api/weather/current/cities/Seattle");
    await expect(res.statusCode).toEqual(200);
  });

  it("should return 200 with correctly formed zip query", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post("/api/weather/current/id/123456");
    await expect(res.statusCode).toEqual(200);
  });

  it("should return 200 with correctly formed zip query", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post("/api/weather/current/zip/98036");
    await expect(res.statusCode).toEqual(200);
  });

  it("should return 200 with correctly formed lat, lon query", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post(
      "/api/weather/current/lat=45.1&lon=100.3"
    );
    await expect(res.statusCode).toEqual(200);
  });

  it("should return 404 with wrong url", async () => {
    fetch.mockResponseOnce(response);
    const res = await request(app).post("/api/weather/current/");
    await expect(res.statusCode).toEqual(404);
  });
});
