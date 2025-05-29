"use client";

import React from "react";
import { useWeather } from "@/hooks/useWeather";
import { Skeleton } from "@/components/ui/skeleton";
import WeatherIcon from "@/components/weather/WeatherIcon";

export default function ForecastList() {
  const latitude = 21.0285; // Hà Nội
  const longitude = 105.8542;

  const { data, isLoading, isError } = useWeather({ latitude, longitude });

  if (isLoading) {
    return (
      <div className="space-y-2 mt-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="flex space-x-2 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-20 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-6 w-1/3 mt-6" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !data || !data.hourly || !data.daily) {
    return (
      <div className="p-4 rounded-xl bg-red-100 text-red-800 dark:bg-red-900 dark:text-white">
        ⚠️ Lỗi khi tải dự báo thời tiết.
      </div>
    );
  }

  const hourlyForecast = data.hourly.time.slice(0, 24).map((time: string, index: number) => ({
    time: new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temperature: data.hourly.temperature_2m[index],
    icon: "01d",
  }));

  

  const dailyForecast = data.daily.time.map((date, index) => ({
    date: new Date(date).toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
    }),
    minTemp: data.daily.temperature_2m_min[index],
    maxTemp: data.daily.temperature_2m_max[index],
    icon: "01d",
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">🌙 Dự báo 24 giờ tiếp theo</h2>
      <div className="flex overflow-x-auto space-x-3 pb-2">
        {hourlyForecast.map((hour, i) => (
          <div
            key={i}
            className="min-w-[80px] bg-white dark:bg-zinc-800 p-2 rounded-xl text-center shadow"
          >
            <div className="text-sm">{hour.time}</div>
            <WeatherIcon />
            <div className="text-sm">{hour.temperature}°C</div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">📅 Dự báo 7 ngày tới</h2>
      <ul className="space-y-2">
        {dailyForecast.map((day, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white dark:bg-zinc-800 p-3 rounded-xl shadow"
          >
            <span>{day.date}</span>
            <WeatherIcon />

            <span>
              {day.minTemp}°C - {day.maxTemp}°C
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
