// import Link from "next/link";
import React from "react";
import { useWeather } from "@/hooks/useWeather";
import WeatherIcon from "@/components/weather/WeatherIcon";
import { Skeleton } from "@/components/ui/skeleton";

type DistrictCardProps = {
  codename: string;
  name: string;
  lat: number;
  lon: number;
};

const DistrictCard = ({ name, lat, lon }: DistrictCardProps) => {
  const { data, isLoading } = useWeather({ latitude: lat, longitude: lon });
  const current = data?.current_weather;
  const aqi = data?.air_quality?.us_aqi;

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return { text: "Tốt", color: "text-green-600" };
    if (aqi <= 100) return { text: "Trung bình", color: "text-yellow-600" };
    if (aqi <= 150) return { text: "Kém", color: "text-orange-600" };
    return { text: "Xấu", color: "text-red-600" };
  };

  return (
    <div className="border rounded-xl p-4 bg-white dark:bg-zinc-900 shadow transition hover:shadow-md">
      <h3 className="text-lg font-semibold">{name}</h3>

      {isLoading ? (
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      ) : current ? (
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              {current.temperature.toFixed(1)}°C
            </span>
            <WeatherIcon code={current.weathercode} size={32} alt="Weather" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Thời tiết: {current.description ?? "Không rõ"}
          </p>

          {typeof aqi !== "undefined" && (
            <p className={`text-sm font-medium ${getAQIStatus(aqi).color}`}>
              🧪 AQI: {aqi} ({getAQIStatus(aqi).text})
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-2">Không có dữ liệu thời tiết</p>
      )}
    </div>
  );
};
export default DistrictCard;
