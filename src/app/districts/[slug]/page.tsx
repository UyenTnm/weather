import { notFound } from "next/navigation";
import { districtCoordinates } from "@/lib/districtCoordinates";
// import { useWeather } from "@/hooks/useWeather";
import WeatherSection from "@/components/weather/WeatherSection";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  params: { slug: string };
};

export default function DistrictDetailPage({ params }: Props) {
  // const slug = params.slug;
  const codename = params.slug;
  const coords = districtCoordinates[codename];
  const district = districtCoordinates[codename];
  // const districtName = districtsMap[slug] || coords?.name || "Unknown";

  if (!coords) return notFound();

  return (
    <div className="p-4">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Danh sách Quận Huyện", href: "/districts" },
          { label: district.name, href: `/districts/${codename}` },
        ]}
      />
      <WeatherSection
        codename={codename}
        coords={{ lat: coords.lat, lon: coords.lon }}
        name={coords.name}
      />
    </div>
  );
}
