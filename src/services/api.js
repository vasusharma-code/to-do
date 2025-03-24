import axios from "axios";

const API_KEY = "6ed88c1d8f2345689aa153932252403"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};