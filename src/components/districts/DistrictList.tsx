// src/components/districts/DistrictList.tsx
import Link from "next/link";
import React from "react";
import DistrictCard from "./DistrictCard";
import { useDistricts } from "@/hooks/useDistricts";
// import Breadcrumb from "@/components/ui/Breadcrumb";
// import DistrictFilter from "./DistrictFilter";
// import { motion } from "framer-motion";

// const DistrictList = () => {
//   const { filteredDistricts, handleFilterChange } = useDistricts();

const DistrictsPage = () => {
  const { data: districts, isLoading } = useDistricts();

  if (isLoading) return <p>Đang tải danh sách quận/huyện...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {districts?.map((district) => (
        <Link
          key={district.code}
          href={`/districts/${district.codename}`}
          className="block"
        >
          <DistrictCard
            codename={district.codename}
            name={district.name}
            lat={district.lat}
            lon={district.lon}
          />
        </Link>
      ))}
    </div>
  );
};

export default DistrictsPage;
