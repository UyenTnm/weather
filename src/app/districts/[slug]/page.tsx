// app/districts/[slug]/page.tsx

import { notFound } from "next/navigation";
import { districtCoordinates } from "@/lib/districtCoordinates";
// import { useWeather } from "@/hooks/useWeather"; // giữ nguyên nếu dùng trong client
import WeatherSection from "@/components/weather/WeatherSection"; // sẽ tạo bên dưới

type Props = {
  params: { slug: string };
};

export default function DistrictDetailPage({ params }: Props) {
  const codename = params.slug;
  const coords = districtCoordinates[codename];

  if (!coords) return notFound();

  return (
    <WeatherSection
      codename={codename}
      coords={{ lat: coords.lat, lon: coords.lon }}
      name={coords.name} // lấy tên chuẩn khi vào chi tiết quận huyện
    />
  );
}
