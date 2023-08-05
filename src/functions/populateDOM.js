import showCelsius from "./showCelsius";
import showFahrenheit from "./showFahrenheit";

const populateDOM = (weatherData) => {
  const {
    placeName,
    countryName,
    localTime,
    currentData: {
      condition: { icon: currentConditionIcon, text: currentConditionText },
      humidity,
      precip_in: precipitation,
      vis_km: visibility,
      wind_kph: wind,
    },
    forecast: {
      0: {
        astro: { sunrise, sunset },
      },
    },
  } = weatherData;

  const placeNameElement = document.getElementById("placeName");
  placeNameElement.innerHTML = placeName;

  const countryNameElement = document.getElementById("countryName");
  countryNameElement.innerHTML = countryName;

  const localTimeElement = document.getElementById("localTime");
  localTimeElement.innerHTML = localTime;

  const sunriseElement = document.getElementById("sunrise");
  sunriseElement.innerHTML = sunrise;

  const sunsetElement = document.getElementById("sunset");
  sunsetElement.innerHTML = sunset;

  const currentConditionIconElement = document.getElementById(
    "currentConditionIcon"
  );
  currentConditionIconElement.src = currentConditionIcon;

  const currentConditionTextElement = document.getElementById(
    "currentConditionText"
  );
  currentConditionTextElement.innerHTML = currentConditionText;

  const windElement = document.getElementById("wind");
  windElement.innerHTML = `${wind} kph`;

  const humidityElement = document.getElementById("humidity");
  humidityElement.innerHTML = `${humidity}%`;

  const precipitationElement = document.getElementById("precipitation");
  precipitationElement.innerHTML = `${precipitation} in`;

  const visibilityElement = document.getElementById("visibility");
  visibilityElement.innerHTML = `${visibility} km`;

  const forecastHours = document.querySelectorAll("#forecastHour");

  for (let i = 0; i < forecastHours.length; i++) {
    forecastHours[i].innerHTML = weatherData.forecast[0].hour[i].time.slice(-5);
  }

  const forecastConditionIcons = document.querySelectorAll(
    "#forecastConditionIcon"
  );

  for (let i = 0; i < forecastConditionIcons.length; i++) {
    forecastConditionIcons[i].src =
      weatherData.forecast[0].hour[i].condition.icon;
  }

  const celsiusButton = document.getElementById("celsius");
  if (celsiusButton.classList.contains("active")) {
    showCelsius(weatherData);
  } else {
    showFahrenheit(weatherData);
  }
};

export default populateDOM;
