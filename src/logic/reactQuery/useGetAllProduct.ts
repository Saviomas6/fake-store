import { useQuery } from "react-query";
import axios from "axios";
import { apiUrl } from "../../utils/helper";
const getAllProduct = () => {
  const url = axios.get(`${apiUrl}/products`);
  return url;
};

export const useGetAllProduct = () => {
  const { data, isLoading, isFetching, isError } = useQuery(
    "product",
    getAllProduct
  );
  return {
    data,
    isLoading,
    isError,
    isFetching,
  };
};
