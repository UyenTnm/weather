export interface DistrictFromAPI {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
}

export type DistrictSummary = {
  name: string;
  code: number;
  codename: string;
  lat: number;
  lon: number;
  weather: {
    condition: string;
    tempurature: number;
  };
  aqi: number;
};

export default DistrictSummary;
