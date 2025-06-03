import WeatherIcon, {
  getHumidityIcon,
  getWindIcon,
  getUvIcon,
} from "@/components/weather/WeatherIcon";
import { WeatherCardProps } from "@/types/weather";

export const WeatherCard = ({
  temperature,
  humidity,
  windSpeed,
  uvIndex,
  weatherCode,
}: WeatherCardProps) => {
  return (
    <div className="p-4 rounded-xl border bg-white dark:bg-zinc-900 shadow space-y-3">
      <div className="text-xl font-semibold">Thời tiết hiện tại</div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-5xl font-bold">{temperature}°C</div>
        <WeatherIcon code={weatherCode} size={64} alt="Weather status" />
      </div>

      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          {getHumidityIcon(20)}
          <span>Độ ẩm: {humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          {getWindIcon(20)}
          <span>Gió: {windSpeed} km/h</span>
        </div>
        <div className="flex items-center gap-2">
          {getUvIcon(20)}
          <span>UV: {uvIndex}</span>
        </div>
      </div>
    </div>
  );
};
