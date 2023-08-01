const locationAPI = "bharatpur nepal";

const fetchData = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7b20d8507ac64c04b1614158233007&q=${location}&days=3`
  );
  const WeatherData = await response.json();
  return WeatherData;
};

const requiredData = async () => {
  const fetch = await fetchData(`${locationAPI}`);

  try {
    const {
      location: { name: placeName, country: countryName, localtime: localTime },
      current: {
        temp_c: currentCelsius,
        temp_f: currentFahrenheit,
        wind_kph: CurrentWind,
        humidity: currentHumidity,
        feelslike_c: currentFeelsLikeCelsius,
        feelslike_f: currentFeelsLikeFahrenheit,
        vis_km: currentVisibility,
        condition: { text: currentCondition, icon: currentConditionIcon },
      },
      forecast: {
        forecastday: {
          0: {
            date: todayDate,
            day: {
              maxtemp_c: todayMaxTempCelsius,
              maxtemp_f: todayMaxTempFahrenheit,
              mintemp_c: todayMinTempCelsius,
              mintemp_f: todayMinTempFahrenheit,
              maxwind_kph: todayMaxWind,
              avghumidity: todayAvgHumidity,
              daily_chance_of_rain: todayPrecipitation,
              condition: { text: todayCondition, icon: todayConditionIcon },
            },
            astro: { sunrise: todaySunrise, sunset: todaySunset },
            hour: {
              0: {
                temp_c: todayHour0TempCelsius,
                temp_f: todayHour0TempFahrenheit,
                condition: {
                  text: todayHour0Condition,
                  icon: todayHour0ConditionIcon,
                },
              },
            },
          },
        },
      },
    } = fetch;
    const array = [
      `placeName: ${placeName}`,
      `countryName: ${countryName}`,
      `localTime: ${localTime}`,
      `currentCelsius: ${currentCelsius}`,
      `currentFahrenheit: ${currentFahrenheit}`,
      `currentWind: ${CurrentWind}`,
      `currentHumidity: ${currentHumidity}`,
      `currentFeelsLikeCelsius: ${currentFeelsLikeCelsius}`,
      `currentFeelsLikeFahrenheit: ${currentFeelsLikeFahrenheit}`,
      `currentVisibility: ${currentVisibility}`,
      `currentCondition: ${currentCondition}`,
      `currentConditionIcon: ${currentConditionIcon}`,
      `todayDate: ${todayDate}`,
      `todayMaxTempCelsius: ${todayMaxTempCelsius}`,
      `todayMaxTempFahrenheit: ${todayMaxTempFahrenheit}`,
      `todayMinTempCelsius: ${todayMinTempCelsius}`,
      `todayMinTempFahrenheit: ${todayMinTempFahrenheit}`,
      `todayMaxWind: ${todayMaxWind} kmph`,
      `todayAvgHumidity: ${todayAvgHumidity}%`,
      `todayPrecipitation: ${todayPrecipitation}%`,
      `todayCondition: ${todayCondition}`,
      `todayConditionIcon: ${todayConditionIcon}`,
      `todaySunrise: ${todaySunrise}`,
      `todaySunset: ${todaySunset}`,
      `todayHour0TempCelsius: ${todayHour0TempCelsius}`,
      `todayHour0TempFahrenheit: ${todayHour0TempFahrenheit}`,
      `todayHour0Condition: ${todayHour0Condition}`,
      `todayHour0ConditionIcon: ${todayHour0ConditionIcon}`,
    ];
    array.forEach((item) => {
      console.log(item);
    });
  } catch (err) {
    console.log("MisSpelled", err);
  }
};

export default requiredData;
