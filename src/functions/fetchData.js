import populateDOM from "./populateDOM";

const fetchData = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7b20d8507ac64c04b1614158233007&q=${location}&days=1`
  );
  const WeatherData = await response.json();

  try {
    const {
      location: { name: placeName, country: countryName, localtime: localTime },
      current: currentData,
      forecast: { forecastday: forecast },
    } = WeatherData;

    const data = {
      placeName,
      countryName,
      localTime,
      currentData,
      forecast,
    };
    populateDOM(data);
  } catch (error) {
    console.log("Something Unexpected Happened!!", error);
  }
};

export default fetchData;
