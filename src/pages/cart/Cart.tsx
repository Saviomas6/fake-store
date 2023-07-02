import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../logic/redux/actions/productAction";
import { TStore } from "../../logic/redux/store/store";
import { LoadingMainContainer } from "../../styles/sharedStyles";
import { ErrorText } from "../cartDetail/CartDetail.style";
import {
  Button,
  ButtonWrapper,
  CartContainer,
  CartLeftContainer,
  CartMainContainer,
  CartProductImage,
  CartProductImageContainer,
  CartProductPrice,
  CartProductTitle,
  CartRightContainer,
} from "./Cart.style";
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
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: TStore) => state.counter.cart);

  return (
    <>
      {cart?.map((product: I_Product) => (
        <CartMainContainer key={product?.id}>
          <CartContainer>
            <CartLeftContainer>
              <CartProductImageContainer>
                <CartProductImage src={product?.image} />
              </CartProductImageContainer>
            </CartLeftContainer>
            <CartRightContainer>
              <CartProductTitle>{product?.title}</CartProductTitle>
              <CartProductPrice>${product?.price}</CartProductPrice>
              <ButtonWrapper>
                <Button onClick={() => dispatch(deleteItem(product?.id))}>
                  Remove
                </Button>
              </ButtonWrapper>
            </CartRightContainer>
          </CartContainer>
        </CartMainContainer>
      ))}
      {cart?.length === 0 && (
        <LoadingMainContainer>
          <ErrorText>No Item Found</ErrorText>
        </LoadingMainContainer>
      )}
    </>
  );
};

export default Cart;
