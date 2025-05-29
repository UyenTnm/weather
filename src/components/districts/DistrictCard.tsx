import { useWeather } from "@/hooks/useWeather";
import WeatherIcon from "@/components/weather/WeatherIcon";
import { Skeleton } from "@/components/ui/skeleton";
type DistrictCardProps = {
  name: string;
  lat: number;
  lon: number;
};

const DistrictCard = ({ name, lat, lon }: DistrictCardProps) => {
  const { data, isLoading } = useWeather({ latitude: lat, longitude: lon });
  const current = data?.current;

  return (
    <div className="border rounded-xl p-4 bg-white dark:bg-zinc-900 shadow">
      <h3 className="text-lg font-semibold">{name}</h3>
      {isLoading ? (
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-6 w-16" /> {/* nhiệt độ */}
          <Skeleton className="h-8 w-8 rounded-full" /> {/* icon thời tiết */}
        </div>
      ) : (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold">{current.temperature_2m}°C</span>
          <WeatherIcon code={current.weatherCode} size={32} alt="Weather" />
        </div>
      )}
    </div>
  );
};

export default DistrictCard;
