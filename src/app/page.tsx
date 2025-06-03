import CurrentWeather from "@/components/weather/CurrentWeather";
import ForecastList from "@/components/weather/ForecastList";
export const metadata = {
  title: "Trang Chủ - Dự báo thời tiết",
};
export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-6 px-4 sm:px-6 space-y-6 min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">
          🌤 Dự báo thời tiết Hà Nội
        </h1>
        <CurrentWeather latitude={21.0285} longitude={105.8542} />
        {/* ForecastCarousel sẽ đặt ở đây nếu có */}
        <ForecastList />
      </div>
    </main>
  );
}
