import { useQuery } from "@tanstack/react-query";
import { locationAPI } from "@/lib/api";

export const useDistricts = () => {
  return useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      // Hà Nội có mã tỉnh là 01
      const res = await locationAPI.get("p/01?depth=2");
      return res.data.districts; // Trả về danh sách quận/huyện
    },
  });
};
