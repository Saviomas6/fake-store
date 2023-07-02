import { useDispatch, useSelector } from "react-redux/es/exports";
import Card from "../../components/card/Card";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useGetAllProduct } from "../../logic/reactQuery/useGetAllProduct";
import { searchValue } from "../../logic/redux/actions/productAction";
import { TStore } from "../../logic/redux/store/store";
import {
  CardDetailGridLayout,
  LoadingMainContainer,
  OpacityAnimation,
} from "../../styles/sharedStyles";
import { debounce } from "../../utils/helper";
import {
  ErrorText,
  HomePageContainer,
  InputField,
  InputFieldWrapper,
} from "./HomePage.style";

interface I_Rating {
  count: number;
  rate: number;
}
interface I_Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: I_Rating;
  title: string;
}
const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetAllProduct();
  const search = useSelector((state: TStore) => state.counter.searchInputValue);

  const productFilter = data?.data?.filter((product: I_Product) =>
    product?.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: any) => {
    dispatch(searchValue(e.target.value));
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  return (
    <HomePageContainer>
      <InputFieldWrapper>
        <InputField
          type="text"
          placeholder="Search"
          onChange={handleDebounce}
        />
      </InputFieldWrapper>
      <CardDetailGridLayout>
        {productFilter?.map((value: I_Product, index: number) => (
          <OpacityAnimation key={value?.id}>
            <Card
              id={value?.id}
              title={value?.title}
              price={value?.price}
              image={value?.image}
            />
          </OpacityAnimation>
        ))}
      </CardDetailGridLayout>
      {isLoading && (
        <LoadingMainContainer>
          <LoadingSpinner color="#3AB712" innerSize="20" outerSize="50" />
        </LoadingMainContainer>
      )}
      {isError && (
        <LoadingMainContainer>
          <ErrorText>404 Error Not Found</ErrorText>
        </LoadingMainContainer>
      )}
      {productFilter?.length === 0 && (
        <LoadingMainContainer>
          <ErrorText> No Product Found</ErrorText>
        </LoadingMainContainer>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
