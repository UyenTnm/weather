export type WeatherCardProps = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  uvIndex: number;
  weatherCode: number;
};

// Thêm kiểu dữ liệu WeatherForecastData
export interface WeatherForecastData {
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
  daily: {
    time: string[];
    tempurature_2m_min: number[];
    temperature_2m_max: number[];
  };
}
