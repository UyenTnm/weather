// src/components/districts/DistrictWeatherDetail.tsx
import React, { useEffect, useState } from "react";
import WeatherChart from "@/components/weather/WeatherChart";
import CurrentWeather from "@/components/weather/CurrentWeather";
import { getWeatherByLatLng } from "@/lib/api"; // Hàm fetch dữ liệu thời tiết
import { motion } from "framer-motion";

interface District {
  name: string;
  lat: number;
  lon: number;
}

interface Props {
  district: District;
}

// Hàm chuyển weatherCode thành tên theme
const getWeatherTheme = (weatherCode: number): string => {
  if ([0, 1].includes(weatherCode)) return "sunny"; // trời nắng
  if ([2, 3].includes(weatherCode)) return "cloudy"; // trời mây
  if (weatherCode >= 45 && weatherCode <= 99) return "rainy"; // trời mưa hoặc sương mù
  return "default";
};

// Animation hiệu ứng đơn giản cho thời tiết
const WeatherAnimation = ({ theme }: { theme: string }) => {
  switch (theme) {
    case "sunny":
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg"
          aria-label="Sun animation"
        />
      );
    case "cloudy":
      return (
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-16 h-10 bg-gray-400 rounded-full shadow-md"
          aria-label="Cloud animation"
        />
      );
    case "rainy":
      return (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="w-1 h-6 bg-blue-500 rounded shadow"
          aria-label="Rain animation"
        />
      );
    default:
      return null;
  }
};

const DistrictWeatherDetail = ({ district }: Props) => {
  const [weatherCode, setWeatherCode] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByLatLng(district.lat, district.lon);
        setWeatherCode(data.current_weather.weathercode);
        setError(null);
      } catch (err) {
        setError("Không thể lấy dữ liệu thời tiết");
        console.error(err);
      }
    };
    fetchWeather();
  }, [district.lat, district.lon]);

  const theme = weatherCode !== null ? getWeatherTheme(weatherCode) : "default";

  return (
    <motion.div
      className={`p-6 rounded-lg dark:text-white 
        ${theme === "sunny" ? "bg-yellow-100 dark:bg-yellow-900" : ""}
        ${theme === "cloudy" ? "bg-gray-200 dark:bg-gray-800" : ""}
        ${theme === "rainy" ? "bg-blue-100 dark:bg-blue-900" : ""}
        ${theme === "default" ? "bg-gray-100 dark:bg-gray-900" : ""}
      `}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-4">Thời tiết tại {district.name}</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Animation thời tiết */}
      <div className="mb-4">
        <WeatherAnimation theme={theme} />
      </div>

      {/* Component hiển thị thời tiết hiện tại */}
      <CurrentWeather latitude={district.lat} longitude={district.lon} />

      {/* Biểu đồ dự báo 7 ngày */}
      <div className="mt-6">
        <WeatherChart latitude={district.lat} longitude={district.lon} />
      </div>

      {/* Placeholder phần mở rộng */}
      <div className="mt-6 italic text-sm opacity-75">
        <p>Chỉ số chất lượng không khí: đang cập nhật...</p>
        <p>Thông tin mưa/nắng: đang cập nhật...</p>
      </div>
    </motion.div>
  );
};

export default DistrictWeatherDetail;

// Bị stuck khi làm DsitrictWeatherDetail.tsx
