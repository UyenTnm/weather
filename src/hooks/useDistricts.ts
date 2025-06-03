import { useQuery } from "@tanstack/react-query";
import { locationAPI } from "@/lib/api";
import { districtCoordinates } from "@/lib/districtCoordinates";
import { DistrictSummary } from "@/types/districts";
import mapCodeToCodename from "@/lib/mapCodeToCodename";
import type DistrictFromAPI from "@/types/districts";

export const useDistricts = () => {
  return useQuery<DistrictSummary[]>({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await locationAPI.get("p/01?depth=2"); // Hà Nội (mã tỉnh 01)
      const districtsFromAPI = res.data.districts;

      const enrichedDistricts = districtsFromAPI
        .map((apiItem: DistrictFromAPI) => {
          const item = apiItem as { name: string; code: number };
          const codename = mapCodeToCodename[item.code];
          if (!codename) return null;

          const coords = districtCoordinates[codename];
          if (!coords) return null;

          return {
            name: item.name,
            code: item.code,
            codename,
            lat: coords.lat,
            lon: coords.lon,
            weather: coords.weather,
            aqi: coords.aqi,
          };
        })
        .filter(Boolean) as DistrictSummary[];

      return enrichedDistricts;
    },

    staleTime: 1000 * 60 * 10, // dữ liệu cũ sau 10 phút
  });
};

export const useWeather = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&air_quality=true`
      );
      const data = await res.json();
      return {
        current_weather: {
          temperature: data.current_weather.temperature,
          weathercode: data.current_weather.weathercode,
          description: "Trời nắng", // bạn có thể map thêm mô tả dựa trên weathercode
        },
        air_quality: {
          us_aqi: data.current.air_quality_index, // thay bằng field đúng với API bạn đang dùng
        },
      };
    },
    staleTime: 1000 * 60 * 10,
  });
};
