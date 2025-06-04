export const districtCoordinates: Record<
  string,
  {
    lat: number;
    lon: number;
    name: string;
    weather: { condition: string; temperature: number };
    aqi: number;
  }
> = {
  quan_ba_dinh: {
    lat: 21.0358,
    lon: 105.8342,
    name: "Quận Ba Đình",
    weather: { condition: "Nắng", temperature: 33 },
    aqi: 82,
  },
  quan_hoan_kiem: {
    lat: 21.0285,
    lon: 105.8542,
    name: "Quận Hoàn Kiếm",
    weather: { condition: "Mưa", temperature: 29 },
    aqi: 90,
  },
  quan_tay_ho: {
    lat: 21.0702,
    lon: 105.8188,
    name: "Quận Tây Hồ",
    weather: { condition: "Âm u", temperature: 30 },
    aqi: 75,
  },
  quan_long_bien: {
    lat: 21.0547,
    lon: 105.9113,
    name: "Quận Long Biên",
    weather: { condition: "Nhiều mây", temperature: 31 },
    aqi: 88,
  },
  quan_cau_giay: {
    lat: 21.0307,
    lon: 105.7896,
    name: "Quận Cầu Giấy",
    weather: { condition: "Nắng", temperature: 34 },
    aqi: 95,
  },
  quan_dong_da: {
    lat: 21.0181,
    lon: 105.8291,
    name: "Quận Đống Đa",
    weather: { condition: "Mưa", temperature: 28 },
    aqi: 87,
  },
  quan_hai_ba_trung: {
    lat: 21.0059,
    lon: 105.852,
    name: "Quận Hai Bà Trưng",
    weather: { condition: "Nắng", temperature: 35 },
    aqi: 100,
  },
  quan_hoang_mai: {
    lat: 20.9715,
    lon: 105.8587,
    name: "Quận Hoàng Mai",
    weather: { condition: "Âm u", temperature: 30 },
    aqi: 92,
  },
  quan_thanh_xuan: {
    lat: 20.9946,
    lon: 105.8048,
    name: "Quận Thanh Xuân",
    weather: { condition: "Nhiều mây", temperature: 31 },
    aqi: 89,
  },
  huyen_soc_son: {
    lat: 21.2667,
    lon: 105.8333,
    name: "Huyện Sóc Sơn",
    weather: { condition: "Mưa", temperature: 27 },
    aqi: 70,
  },
  huyen_dong_anh: {
    lat: 21.1394,
    lon: 105.8597,
    name: "Huyện Đông Anh",
    weather: { condition: "Nắng", temperature: 33 },
    aqi: 85,
  },
  huyen_gia_lam: {
    lat: 21.031,
    lon: 105.9601,
    name: "Huyện Gia Lâm",
    weather: { condition: "Âm u", temperature: 30 },
    aqi: 76,
  },
  huyen_thanh_tri: {
    lat: 20.9484,
    lon: 105.8414,
    name: "Huyện Thanh Trì",
    weather: { condition: "Nhiều mây", temperature: 31 },
    aqi: 82,
  },
  huyen_thuong_tin: {
    lat: 20.841,
    lon: 105.865,
    name: "Huyện Thường Tín",
    weather: { condition: "Mưa", temperature: 28 },
    aqi: 74,
  },
  huyen_phu_xuyen: {
    lat: 20.765,
    lon: 105.9243,
    name: "Huyện Phú Xuyên",
    weather: { condition: "Nắng", temperature: 34 },
    aqi: 80,
  },
  huyen_me_linh: {
    lat: 21.162,
    lon: 105.7303,
    name: "Huyện Mê Linh",
    weather: { condition: "Âm u", temperature: 29 },
    aqi: 78,
  },
  huyen_ba_vi: {
    lat: 21.1729,
    lon: 105.4064,
    name: "Huyện Ba Vì",
    weather: { condition: "Mưa", temperature: 26 },
    aqi: 72,
  },
  huyen_phuc_tho: {
    lat: 21.1054,
    lon: 105.5746,
    name: "Huyện Phúc Thọ",
    weather: { condition: "Nắng", temperature: 32 },
    aqi: 77,
  },
  huyen_thach_that: {
    lat: 21.0457,
    lon: 105.581,
    name: "Huyện Thạch Thất",
    weather: { condition: "Nhiều mây", temperature: 30 },
    aqi: 79,
  },
  huyen_quoc_oai: {
    lat: 20.9969,
    lon: 105.6412,
    name: "Huyện Quốc Oai",
    weather: { condition: "Âm u", temperature: 29 },
    aqi: 81,
  },
  huyen_chuong_my: {
    lat: 20.9515,
    lon: 105.6751,
    name: "Huyện Chương Mỹ",
    weather: { condition: "Mưa", temperature: 27 },
    aqi: 69,
  },
  huyen_thanh_oai: {
    lat: 20.8579,
    lon: 105.7485,
    name: "Huyện Thanh Oai",
    weather: { condition: "Nhiều mây", temperature: 30 },
    aqi: 75,
  },
  huyen_my_duc: {
    lat: 20.7033,
    lon: 105.7403,
    name: "Huyện Mỹ Đức",
    weather: { condition: "Mưa", temperature: 26 },
    aqi: 71,
  },
  huyen_ung_hoa: {
    lat: 20.7417,
    lon: 105.7789,
    name: "Huyện Ứng Hòa",
    weather: { condition: "Nắng", temperature: 33 },
    aqi: 83,
  },
  huyen_hoai_duc: {
    lat: 21.0522,
    lon: 105.7047,
    name: "Huyện Hoài Đức",
    weather: { condition: "Âm u", temperature: 29 },
    aqi: 78,
  },
  huyen_dan_phuong: {
    lat: 21.0989,
    lon: 105.6706,
    name: "Huyện Đan Phượng",
    weather: { condition: "Nắng", temperature: 32 },
    aqi: 84,
  },
  huyen_thi_xa_son_tay: {
    lat: 21.139,
    lon: 105.5044,
    name: "Thị xã Sơn Tây",
    weather: { condition: "Mưa", temperature: 27 },
    aqi: 73,
  },
  huyen_dong_my: {
    lat: 20.9629,
    lon: 105.9556,
    name: "Xã Đông Mỹ (nằm trong huyện Thanh Trì)",
    weather: { condition: "Âm u", temperature: 29 },
    aqi: 79,
  },
};
export const districtsMap = Object.fromEntries(
  Object.entries(districtCoordinates).map(([slug, data]) => [slug, data.name])
);

// export default districtCoordinates.tsx;
// export default districtCoordinates.tsx;

