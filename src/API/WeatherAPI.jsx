const baseURL = "https://api.weatherapi.com/v1/current.json?key=723f71b3b83d4fc0ad8115943241105"
export const getWeatherData = async (city) => {
      const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
      return await response.json();
};

