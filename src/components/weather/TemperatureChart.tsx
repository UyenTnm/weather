"use client";

import {
  ResponsiveContainer, // Đãm bão biểu đồ co giãn theo màn hình
  LineChart, // Loại biểu đồ đường line
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

type Props = {
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
  };
};

const TemperatureChart: React.FC<Props> = ({ daily }) => {
  // Chuyển dữ liệu daily thành mảng đối tượng { date: ..., max: ..., min: ... }
  const chartData = daily.time.map((date, index) => ({
    date,
    max: daily.temperature_2m_max[index],
    min: daily.temperature_2m_min[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* data={chartData} là dữ liệu chuẩn hoá từ mảng daily */}
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* XAxis dataKey="date" - Hiển thị trục ngang là ngày */}
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        {/* YAxis unit="°C"	- Hiển thị trục dọc có đơn vị độ C */}
        <YAxis unit="°C" />
        {/* Tooltip, Legend - Tooltip hiển thị khi hover và chú thích màu */}
        <Tooltip />
        <Legend />
        {/* Line dataKey="max" là đường nhiệt độ cao màu đỏ */}
        <Line
          type="monotone"
          dataKey="max"
          stroke="#ef4444"
          name="Nhiệt độ cao"
        />
        {/* Line dataKey="min" là đường nhiệt độ thấp màu xanh dương */}
        <Line
          type="monotone"
          dataKey="min"
          stroke="#3b82f6"
          name="Nhiệt độ thấp"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
