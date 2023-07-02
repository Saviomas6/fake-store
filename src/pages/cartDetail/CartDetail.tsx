import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useGetAllProductId } from "../../logic/reactQuery/useGetAllProductId";
import { addItem } from "../../logic/redux/actions/productAction";
import {
  LoadingMainContainer,
  OpacityAnimation,
} from "../../styles/sharedStyles";
import {
  AddToCartButton,
  ButtonWrapper,
  CardDetailContainer,
  CardDetailLeftContainer,
  CardDetailMainContainer,
  CardDetailRightContainer,
  CategoryHeading,
  ErrorText,
  ProductDescription,
  ProductImage,
  ProductImageCard,
  ProductName,
  ProductPrice,
  ProductRating,
} from "./CartDetail.style";
import { useDispatch } from "react-redux";
const CartDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError, isFetching } = useGetAllProductId(
    Number(params?.id && params?.id)
  );

  return (
    <>
      {isFetching || isLoading ? (
        <LoadingMainContainer>
          <LoadingSpinner color="#3AB712" innerSize="20" outerSize="50" />
        </LoadingMainContainer>
      ) : (
        <OpacityAnimation>
          <CardDetailMainContainer>
            <CardDetailContainer>
              <CardDetailLeftContainer>
                <ProductImageCard>
                  <ProductImage src={data?.data?.image} />
                </ProductImageCard>
              </CardDetailLeftContainer>
              <CardDetailRightContainer>
                <CategoryHeading>{data?.data?.category}</CategoryHeading>
                <ProductName>{data?.data?.title}</ProductName>
                <ProductRating>
                  Rating {data?.data?.rating?.rate}
                  <AiFillStar size={20} style={{ marginLeft: "5px" }} />
                </ProductRating>
                <ProductPrice>$ {data?.data?.price}</ProductPrice>
                <ProductDescription>
                  {data?.data?.description}
                </ProductDescription>
                <ButtonWrapper>
                  <AddToCartButton
                    onClick={() => dispatch(addItem(data?.data))}
                  >
                    Add to Cart
                  </AddToCartButton>
                </ButtonWrapper>
              </CardDetailRightContainer>
            </CardDetailContainer>
          </CardDetailMainContainer>
        </OpacityAnimation>
      )}
      {isError && (
        <LoadingMainContainer>
          <ErrorText>404 Error Not Found</ErrorText>
        </LoadingMainContainer>
      )}
    </>
  );
};

export default CartDetail;
