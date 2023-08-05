const showFahrenheit = (weatherData) => {
  const {
    currentData: { temp_f: currentTemp, feelslike_f: feelsLikeTemp },
    forecast: {
      0: {
        day: { maxtemp_f: maxTemp, mintemp_f: minTemp },
      },
    },
  } = weatherData;

  const currentTempElement = document.getElementById("currentTemp");
  currentTempElement.innerHTML = `${currentTemp} &deg;F`;

  const feelsLikeElement = document.getElementById("feelsLike");
  feelsLikeElement.innerHTML = `${feelsLikeTemp} &deg;F`;

  const maxTempElement = document.getElementById("maxTemp");
  maxTempElement.innerHTML = `${maxTemp} &deg;F`;

  const minTempElement = document.getElementById("minTemp");
  minTempElement.innerHTML = `${minTemp} &deg;F`;

  const forecastHourTemps = document.querySelectorAll("#forecastHourTemp");

  for (let i = 0; i < forecastHourTemps.length; i++) {
    forecastHourTemps[
      i
    ].innerHTML = `${weatherData.forecast[0].hour[i].temp_f} &deg;F`;
  }
};

export default showFahrenheit;
