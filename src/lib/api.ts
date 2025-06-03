import axios from "axios";

export const getWeatherByLatLng = async (lat: number, lng: number) => {
  const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: lat,
      longitude: lng,
      current_weather: true,
      temperature_unit: "celsius",
      hourly:
        "temperature_2m,weathercode,relative_humidity_2m,wind_speed_10m,uv_index",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      timezone: "auto",
    },
  });

  return res.data;
};

export const locationAPI = axios.create({
  baseURL: "https://provinces.open-api.vn/api/",
  timeout: 5000,
});
