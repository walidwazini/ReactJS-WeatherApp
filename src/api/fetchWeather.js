import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = ''

const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }
  })
  return response.data
}

export default fetchWeather