module.exports = {
  maxTemp: list =>
    list
      .concat()
      .sort((a, b) => (a.main.temp_max > b.main.temp_max ? -1 : 1))[0].main
      .temp_max,

  minTemp: list =>
    list
      .concat()
      .sort((a, b) => (a.main.temp_min < b.main.temp_min ? -1 : 1))[0].main
      .temp_min,

  avgHumidity: list => {
    let humidity = 0;
    list.forEach(w => (humidity += w.main.humidity));
    return humidity / list.length;
  }
};
