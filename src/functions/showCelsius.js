const showCelsius = (weatherData) => {
  const {
    currentData: { temp_c: currentTemp, feelslike_c: feelsLikeTemp },
    forecast: {
      0: {
        day: { maxtemp_c: maxTemp, mintemp_c: minTemp },
      },
    },
  } = weatherData;

  const currentTempElement = document.getElementById("currentTemp");
  currentTempElement.innerHTML = `${currentTemp} &deg;C`;

  const feelsLikeElement = document.getElementById("feelsLike");
  feelsLikeElement.innerHTML = `${feelsLikeTemp} &deg;C`;

  const maxTempElement = document.getElementById("maxTemp");
  maxTempElement.innerHTML = `${maxTemp} &deg;C`;

  const minTempElement = document.getElementById("minTemp");
  minTempElement.innerHTML = `${minTemp} &deg;C`;

  const forecastHourTemps = document.querySelectorAll("#forecastHourTemp");

  for (let i = 0; i < forecastHourTemps.length; i++) {
    forecastHourTemps[
      i
    ].innerHTML = `${weatherData.forecast[0].hour[i].temp_c} &deg;C`;
  }
};

export default showCelsius;
