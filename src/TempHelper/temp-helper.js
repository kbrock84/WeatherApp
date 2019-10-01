const kelvinToF = k => Math.round(((k - 273.15) * 9) / 5 + 32);
const kelvinToC = k => Math.round(k - 273.15);

module.exports = {
  kelvinTo: (kelvin, unit = "C") =>
    unit === "F" ? kelvinToF(kelvin) : kelvinToC(kelvin)
};
