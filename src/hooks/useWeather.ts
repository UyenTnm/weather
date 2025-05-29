import { useQuery } from "@tanstack/react-query";
import { getWeatherByLatLng } from "@/lib/api";

interface WeatherParams {
  latitude: number;
  longitude: number;
}

export const useWeather = ({ latitude, longitude }: WeatherParams) => {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeatherByLatLng(latitude, longitude),
    enabled: !!latitude && !!longitude, // chỉ gọi khi có tọa độ
    // staleTime: 1000 * 60 * 5, // cache 5 phút
  });
};


