"use client";
import { useDistricts } from "@/hooks/useDistricts";
import { districtCoordinates } from "@/lib/districtCoordinates";
import DistrictCard from "@/components/districts/DistrictCard";
import type { DistrictSummary } from "@/types/districts";
import Link from "next/link";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function DistrictsPage() {
  useEffect(() => {
    document.title = "Danh sách Quận Huyện - Dự báo thời tiết";
  }, []);

  const { data: districts, isLoading } = useDistricts();

  if (isLoading) return <Skeleton className="h-6 w-16" />;

  return (
    <div className="p-4">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Danh sách Quận Huyện", href: "/districts" },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {districts
          ?.filter(
            (district: DistrictSummary) =>
              district.codename in districtCoordinates
          )
          .map((district: DistrictSummary) => {
            const coords = districtCoordinates[district.codename];
            return (
              <Link
                key={district.code}
                href={`/districts/${district.codename}`}
                className="hover:text-blue-600 transition"
              >
                <DistrictCard
                  codename={district.codename}
                  name={coords.name}
                  lat={coords.lat}
                  lon={coords.lon}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
