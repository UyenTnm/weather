"use client";

import { useWeather } from "@/hooks/useWeather";
import { Skeleton } from "@/components/ui/skeleton";
import { WeatherCard } from "./WeatherCard";

type Props = {
  latitude: number;
  longitude: number;
};

export default function CurrentWeather({ latitude, longitude }: Props) {
  const { data, isLoading, isError } = useWeather({ latitude, longitude });
  console.log("Weather data:", data);
  if (isLoading) {
    return (
      <div className="p-4 rounded-xl border bg-white dark:bg-zinc-900 shadow space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="p-4 rounded-xl bg-red-100 text-red-800 dark:bg-red-900 dark:text-white">
        Lỗi khi tải dữ liệu thời tiết.
      </div>
    );
  }

  // const current = data.current;
  const current = data.current_weather;
  const currentTime = current.time;
  const hourlyTimes = data.hourly.time;
  const uvIndices = data.hourly.uv_index;
  const index = hourlyTimes.findIndex((t: string) => t === currentTime);

  const uvIndex = index !== -1 ? uvIndices[index] : null;

  // console.log("Weather data:", data);
  return (
    <WeatherCard
      temperature={current.temperature}
      humidity={current.relative_humidity_2m}
      windSpeed={current.windspeed}
      // uvIndex={current.uv_index}
      uvIndex={uvIndex}
      weatherCode={current.weathercode}
    />
  );
}
