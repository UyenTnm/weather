// components/weather/WeatherSection.tsx
"use client";

import { useWeather } from "@/hooks/useWeather";
import WeatherIcon from "./WeatherIcon";
import TemperatureChart from "./TemperatureChart";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  codename: string;
  coords: { lat: number; lon: number };
  name: string;
};

export default function WeatherSection({ codename, name, coords }: Props) {
  const { data, isLoading } = useWeather({
    latitude: coords.lat,
    longitude: coords.lon,
  });

  const current = data?.current_weather;
  const daily = data?.daily;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Thời tiết tại {name}</h1>

      {isLoading || !current ? (
        <Skeleton className="h-20 w-full" />
      ) : (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow mb-4">
          <div className="flex items-center gap-4">
            <WeatherIcon code={current.weathercode} size={48} alt="Weather" />
            <div>
              <p className="text-xl font-semibold">{current.temperature}°C</p>
              <p className="text-sm text-gray-500">
                Gió: {current.windspeed} km/h
              </p>
            </div>
          </div>
        </div>
      )}

      {daily ? (
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Dự báo nhiệt độ 7 ngày</h2>
          <TemperatureChart daily={daily} />
        </div>
      ) : (
        <Skeleton className="h-64 w-full" />
      )}
    </div>
  );
}
