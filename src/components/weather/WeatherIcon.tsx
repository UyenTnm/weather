"use client";

import Image from "next/image";

type WeatherIconProps = {
  code: number;
  alt?: string;
  size?: number;
};

const getWeatherIcon = (code: number): string => {
  if (code === 0 || code === 1) {
    return "sunny.png";
  }

  if ([2, 3, 45, 48].includes(code)) {
    return "windy.png";
  }

  return "rainy.png";
};

export const getHumidityIcon = (size = 24) => (
  <Image
    src="/icons/humidity.png"
    alt="Humidity Icon"
    width={size}
    height={size}
    className="object-contain inline-block"
  />
);

export const getWindIcon = (size = 24) => (
  <Image
    src="/icons/wind.png"
    alt="Wind Icon"
    width={size}
    height={size}
    className="object-contain inline-block"
  />
);

export const getUvIcon = (size = 24) => (
  <Image
    src="/icons/uv.png"
    alt="UV Icon"
    width={size}
    height={size}
    className="object-contain inline-block"
  />
);

const WeatherIcon: React.FC<WeatherIconProps> = ({
  code,
  alt = "Weather icon",
  size = 48,
}) => {
  const iconFile = getWeatherIcon(code);
  // console.log("Weather code nhận được:", code);
  // console.log("hiển thị icon:", iconFile);

  return (
    <Image
      src={`/icons/${iconFile}`}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
    />
  );
};

export default WeatherIcon;
