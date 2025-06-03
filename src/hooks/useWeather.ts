import { useQuery } from "@tanstack/react-query";
import { getWeatherByLatLng } from "@/lib/api";

interface WeatherParams {
  latitude: number;
  longitude: number;
}

interface CurrentWeather {
  temperature: number;
  weathercode: number;
  description: string;
  windspeed?: number;
  winddirection?: number;
  time?: string;
}

export interface WeatherForecastData {
  latitude: number;
  longitude: number;
  current_weather: CurrentWeather;
  // có thể mở rộng nếu cần, thêm air_quality
  air_quality?: {
    us_aqi?: number;
  };
}

// Hàm map weathercode sang mô tả
const mapWeatherCodeToDescription = (code: number): string => {
  switch (code) {
    case 0:
      return "Trời quang đãng";
    case 1:
      return "Có mây";
    case 2:
      return "Nhiều mây";
    case 3:
      return "Có mưa nhẹ";
    case 45:
      return "Sương mù";
    case 48:
      return "Sương khô";
    case 51:
      return "Mưa phùn nhẹ";
    case 53:
      return "Mưa phùn vừa";
    case 55:
      return "Mưa phùn nặng";
    case 61:
      return "Mưa nhẹ";
    case 63:
      return "Mưa vừa";
    case 65:
      return "Mưa nặng";
    // ... các trường hợp khác
    default:
      return "Không rõ";
  }
};

export const useWeather = ({ latitude, longitude }: WeatherParams) => {
  return useQuery<WeatherForecastData>({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const data = await getWeatherByLatLng(latitude, longitude);

      return {
        ...data,
        current_weather: {
          ...data.current_weather,
          description: mapWeatherCodeToDescription(
            data.current_weather.weathercode
          ),
        },
      };
    },
    enabled: !!latitude && !!longitude,
    staleTime: 1000 * 60 * 5, // cache 5 phút
  });
};
