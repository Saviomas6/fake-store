import { useQuery } from "react-query";
import axios from "axios";
import { apiUrl } from "../../utils/helper";
const getAllProductId = (id: number) => {
  const url = axios.get(`${apiUrl}/products/${id}`);
  return url;
};

export const useGetAllProductId = (id: number) => {
  const { data, isLoading, isFetching, isError } = useQuery(
    "productId",
    () => getAllProductId(id),
    { enabled: !!id, refetchOnWindowFocus: false }
  );
  return {
    data,
    isLoading,
    isError,
    isFetching,
  };
};
