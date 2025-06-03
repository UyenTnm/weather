"use client";

import React from "react";
import { useWeather } from "@/hooks/useWeather";
import { Skeleton } from "@/components/ui/skeleton";
import WeatherIcon from "@/components/weather/WeatherIcon";
import type { WeatherForecastData } from "@/types/weather";

// ✅ Định nghĩa kiểu dữ liệu rõ ràng
interface HourlyForecast {
  time: string;
  temperature: number;
  icon: string;
}

interface DailyForecast {
  date: string;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export default function ForecastList() {
  const latitude = 21.0285; // Hà Nội
  const longitude = 105.8542;

  const { data, isLoading, isError } = useWeather({ latitude, longitude }) as {
    data: WeatherForecastData | undefined;
    isLoading: boolean;
    isError: boolean;
  };

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

  // ✅ Xử lý dữ liệu giờ
  const hourlyForecast: HourlyForecast[] = data.hourly.time
    .slice(0, 24)
    .map((time: string, index: number) => ({
      time: new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temperature: data.hourly.temperature_2m[index],
      icon: "01d", // có thể dùng icon thật từ API nếu có
    }));

  // ✅ Xử lý dữ liệu ngày
  const dailyForecast: DailyForecast[] = (data.daily.time as string[]).map(
    (date: string, index: number) => ({
      date: new Date(date).toLocaleDateString("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
      }),
      minTemp: data.daily.temperature_2m_min[index],
      maxTemp: data.daily.temperature_2m_max[index],
      icon: "01d", // tương tự
    })
  );

  return (
    <div className="mt-8">
      <h2 className="text-lg sm:rext-xl font-semibold mb-3 sm:mb-4 mt-6">
        🌙 Dự báo 24 giờ tiếp theo
      </h2>
      <div className="flex overflow-x-auto space-x-3 pb-2 snap-x snap-mandatory">
        {hourlyForecast.map((hour, i) => (
          <div
            key={i}
            className="w-[80px] h-[120px] flex flex-col items-center justify-between bg-white dark:bg-zinc-800 p-2 rounded-xl text-center shadow "
          >
            <div className="text-sm h-[20px] whitespace-nowrap">
              {hour.time}
            </div>
            <WeatherIcon code={hour.icon} />
            <div className="text-sm">{hour.temperature}°C</div>
          </div>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 mt-6">
        📅 Dự báo 7 ngày tới
      </h2>
      <ul className="space-y-2">
        {dailyForecast.map((day: DailyForecast, i: number) => (
          <li
            key={i}
            className="grid grid-cols-[1fr_auto_1fr] items-center bg-white dark:bg-zinc-800 px-3 py-2 sm:py3 rounded-xl shadow text-sm sm:text-base"
          >
            <span className="text-left truncate max-w-[100px] sm:max-w-none">
              {day.date}
            </span>
            <div className="flex justify-center">
              <WeatherIcon code={day.icon} />
            </div>
            <span className="text-right">
              {day.minTemp}°C - {day.maxTemp}°C
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
