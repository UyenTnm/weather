// src/components/weather/WeatherChart.tsx
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getWeatherByLatLng } from "@/lib/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  latitude: number;
  longitude: number;
}

const WeatherChart = ({ latitude, longitude }: Props) => {
  const [labels, setLabels] = useState<string[]>([]);
  const [temps, setTemps] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherByLatLng(latitude, longitude);
      console.log("📦 Full weather data:", data);
      const forecast = data.daily;

      if (!forecast || !forecast.temperature_2m_max || !forecast.time) {
        console.warn("⚠️ Không có dữ liệu daily phù hợp trong API response");
        return;
      }

      const newLabels = forecast.time.map((t: string) =>
        new Date(t).toLocaleDateString("vi-VN", {
          weekday: "short",
          day: "numeric",
        })
      );

      const newTemps = forecast.temperature_2m_max; // nhiệt độ cao nhất trong ngày

      setLabels(newLabels);
      setTemps(newTemps);
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Dự báo nhiệt độ 7 ngày</h3>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Nhiệt độ cao nhất (°C)",
              data: temps,
              fill: false,
              borderColor: "#facc15",
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: false },
          },
        }}
      />
    </div>
  );
};

export default WeatherChart;
