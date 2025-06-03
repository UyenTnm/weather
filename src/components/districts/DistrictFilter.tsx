// src/components/districts/DistrictFilter.tsx
import React from "react";

const weatherOptions = [
  { label: "Tất cả", value: "all" },
  { label: "Nắng", value: "sunny" },
  { label: "Mưa", value: "rain" },
  { label: "Mây", value: "cloudy" },
];

const DistrictFilter = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <div className="mb-4">
      <select
        className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        onChange={(e) => onChange(e.target.value)}
      >
        {weatherOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictFilter;
